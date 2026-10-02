<?php
require_once __DIR__ . '/auth.php';
require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(['error' => 'Method not allowed'], 405);
}

if (empty($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    json_out(['error' => 'No image uploaded, or the upload failed'], 400);
}

$file = $_FILES['image'];

$maxBytes = 5 * 1024 * 1024;
if ($file['size'] > $maxBytes) {
    json_out(['error' => 'Image must be smaller than 5MB'], 400);
}

$imageInfo = @getimagesize($file['tmp_name']);
if ($imageInfo === false) {
    json_out(['error' => 'File is not a valid image'], 400);
}

$allowedTypes = [
    IMAGETYPE_JPEG => 'jpg',
    IMAGETYPE_PNG => 'png',
    IMAGETYPE_WEBP => 'webp',
    IMAGETYPE_GIF => 'gif',
];
$type = $imageInfo[2];
if (!isset($allowedTypes[$type])) {
    json_out(['error' => 'Only JPG, PNG, WEBP or GIF images are allowed'], 400);
}
$ext = $allowedTypes[$type];

$uploadsDir = __DIR__ . '/../uploads';
if (!is_dir($uploadsDir) && !mkdir($uploadsDir, 0755, true) && !is_dir($uploadsDir)) {
    json_out(['error' => 'Could not create uploads directory'], 500);
}

$filename = bin2hex(random_bytes(16)) . '.' . $ext;
$destination = $uploadsDir . '/' . $filename;

if (!move_uploaded_file($file['tmp_name'], $destination)) {
    json_out(['error' => 'Failed to save the uploaded image'], 500);
}

json_out(['ok' => true, 'url' => '/uploads/' . $filename]);
