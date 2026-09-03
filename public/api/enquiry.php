<?php
set_exception_handler(function ($e) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
    exit;
});

header('Content-Type: application/json; charset=utf-8');

function json_out($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(['error' => 'Method not allowed'], 405);
}

$raw = file_get_contents('php://input');
$body = json_decode($raw, true);
$body = is_array($body) ? $body : [];

// Honeypot: a hidden field real visitors never fill in. If it has a
// value, silently pretend success so bots don't learn to adapt.
if (!empty($body['website'])) {
    json_out(['ok' => true]);
}

function clean_line($value, $maxLength) {
    $value = trim((string)$value);
    // Strip newlines so a field can never be used to inject extra mail
    // headers (classic mail() header-injection vector).
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

$to = 'info@fridgerepairsnearme.com.au';
// Sending "from" an address on the site's own domain (rather than an
// external one, or the visitor's own address) is what lets the
// receiving mail server's SPF check for fridgerepairsnearme.com.au
// pass — the single biggest factor in whether this lands in spam
// without authenticated SMTP.
$fromAddress = 'no-reply@fridgerepairsnearme.com.au';

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
    'From: Fridge Repairs Near Me <' . $fromAddress . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

// The envelope sender (-f) matching the From domain matters as much as
// the From header itself for SPF alignment on most mail servers.
$sent = @mail($to, $subject, $textBody, implode("\r\n", $headers), '-f' . $fromAddress);

if (!$sent) {
    json_out(['error' => 'Your enquiry could not be sent right now. Please email us directly instead.'], 502);
}

json_out(['ok' => true]);
