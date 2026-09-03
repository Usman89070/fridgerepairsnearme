<?php
require_once __DIR__ . '/lib/PHPMailer/Exception.php';
require_once __DIR__ . '/lib/PHPMailer/PHPMailer.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

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
    // headers (classic mail header-injection vector).
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

$mail = new PHPMailer(true);
try {
    // Plain PHP mail() under the hood — no SMTP credentials needed —
    // but every other lever available without a password is pulled:
    // DKIM-signed (proves cryptographically that this domain sent it,
    // works with mail() same as it would with SMTP), From/envelope
    // sender matching the domain for SPF alignment, and clean,
    // complete headers.
    $mail->isMail();
    $mail->CharSet = PHPMailer::CHARSET_UTF8;

    $mail->DKIM_domain = $domain;
    $mail->DKIM_private = __DIR__ . '/dkim/private.pem';
    $mail->DKIM_selector = 'frn2';
    $mail->DKIM_identity = $fromAddress;

    $mail->setFrom($fromAddress, 'Fridge Repairs Near Me — Website');
    $mail->Sender = $fromAddress; // envelope sender / Return-Path
    $mail->addAddress($to);
    $mail->addReplyTo($email, $name);

    $mail->Subject = $subject;
    $mail->Body = $textBody;
    $mail->isHTML(false);

    $mail->send();
} catch (PHPMailerException $e) {
    json_out(['error' => 'Your enquiry could not be sent right now. Please email us directly instead.'], 502);
}

json_out(['ok' => true]);
