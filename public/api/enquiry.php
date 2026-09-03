<?php
require_once __DIR__ . '/auth.php';

// Public endpoint — the homepage contact form. No require_login() here,
// this is meant to be called by anonymous site visitors.

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(['error' => 'Method not allowed'], 405);
}

$body = json_input();

// Honeypot: a hidden field real visitors never fill in. If it has a
// value, silently pretend success so bots don't learn to adapt.
if (!empty($body['website'])) {
    json_out(['ok' => true]);
}

function clean_line($value, $maxLength) {
    $value = trim((string)$value);
    // Strip newlines so a field can never be used to inject extra mail
    // headers (classic PHP mail() header-injection vector).
    $value = preg_replace('/[\r\n]+/', ' ', $value);
    return mb_substr($value, 0, $maxLength);
}

$name = clean_line($body['name'] ?? '', 150);
$email = clean_line($body['email'] ?? '', 255);
$suburb = clean_line($body['suburb'] ?? '', 150);
$appliance = clean_line($body['appliance'] ?? '', 100);
$brand = clean_line($body['brand'] ?? '', 100);
$message = trim((string)($body['message'] ?? ''));
$message = mb_substr($message, 0, 4000);

$errors = [];
if ($name === '') $errors[] = 'Name is required.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'A valid email address is required.';
if ($suburb === '') $errors[] = 'Suburb or postcode is required.';
if ($message === '') $errors[] = 'A description of the fault is required.';
if ($errors) json_out(['error' => implode(' ', $errors)], 422);

$pdo = get_db();
$stmt = $pdo->prepare(
    'INSERT INTO enquiries (name, email, suburb, appliance, brand, message, email_sent) VALUES (?, ?, ?, ?, ?, ?, 0)'
);
$stmt->execute([$name, $email, $suburb, $appliance, $brand !== '' ? $brand : null, $message]);
$enquiryId = $pdo->lastInsertId();

$to = 'info@fridgerepairsnearme.com.au';
$subject = 'New enquiry: ' . $suburb . ' — ' . $appliance;
$lines = [
    "New enquiry from the website contact form.",
    "",
    "Name: {$name}",
    "Email: {$email}",
    "Suburb/Postcode: {$suburb}",
    "Appliance: {$appliance}",
    "Brand: " . ($brand !== '' ? $brand : '—'),
    "",
    "Message:",
    $message,
];
$textBody = implode("\n", $lines);

$headers = [
    'From: Fridge Repairs Near Me <no-reply@fridgerepairsnearme.com.au>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($to, $subject, $textBody, implode("\r\n", $headers));

if ($sent) {
    $pdo->prepare('UPDATE enquiries SET email_sent = 1 WHERE id = ?')->execute([$enquiryId]);
}

// Always report success to the visitor once the enquiry is safely stored —
// it's on record either way, even if the outbound email itself failed.
json_out(['ok' => true]);
