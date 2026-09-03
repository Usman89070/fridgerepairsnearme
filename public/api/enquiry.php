<?php
require_once __DIR__ . '/config.php';

require_once __DIR__ . '/lib/PHPMailer/Exception.php';
require_once __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/lib/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

set_exception_handler(function ($e) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    // Deliberately generic — never echo the raw exception message here,
    // since a misconfigured SMTP_* constant could put mailbox details
    // in it and this endpoint is public.
    echo json_encode(['error' => 'Server error. Please email us directly instead.']);
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
// from the same account in a short window, which is exactly the volume
// pattern that damages sender reputation over time — and, separately,
// slows down anyone trying to brute-force-probe this endpoint.
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
    // headers (classic mail header-injection vector) — belt-and-braces
    // here since PHPMailer already escapes header values internally.
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

$mail = new PHPMailer(true);
try {
    $mail->CharSet = PHPMailer::CHARSET_UTF8;

    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->Port = SMTP_PORT;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USER;
    $mail->Password = SMTP_PASS;

    // Never let SMTP debug output (which can include the auth exchange)
    // reach the response or any log this endpoint controls.
    $mail->SMTPDebug = 0;

    // Explicit, not just default-trusting: verify the mail server's TLS
    // certificate rather than accepting anything that happens to answer
    // on that port — protects the mailbox password in transit from a
    // man-in-the-middle on the outbound connection.
    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true,
            'allow_self_signed' => false,
        ],
    ];

    $mail->setFrom(SMTP_USER, 'Fridge Repairs Near Me — Website');
    $mail->addAddress(SMTP_TO_EMAIL);
    $mail->addReplyTo($email, $name);

    $mail->Subject = $subject;
    $mail->Body = $textBody;
    $mail->isHTML(false);

    $mail->send();
} catch (PHPMailerException $e) {
    // Generic message to the visitor — the real PHPMailer error (which
    // can include SMTP server responses) never reaches the client.
    json_out(['error' => 'Your enquiry could not be sent right now. Please email us directly instead.'], 502);
}

json_out(['ok' => true]);
