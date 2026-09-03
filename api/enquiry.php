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

// Light per-IP throttle: a form hit hard by bots sends a burst of mail
// from the same domain in a short window, which is exactly the pattern
// spam filters flag — this keeps sending volume looking human even
// before any individual message is judged on its own content.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateDir = sys_get_temp_dir() . '/frn_enquiry_rate';
if (!is_dir($rateDir)) @mkdir($rateDir, 0700, true);
$rateFile = $rateDir . '/' . md5($ip);
if (file_exists($rateFile) && (time() - filemtime($rateFile)) < 20) {
    json_out(['error' => 'Please wait a few seconds before sending another enquiry.'], 429);
}
@touch($rateFile);

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

$domain = 'fridgerepairsnearme.com.au';
$to = 'info@' . $domain;
$fromAddress = 'no-reply@' . $domain;

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
