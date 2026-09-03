<?php
require_once __DIR__ . '/auth.php';

$admin = current_admin();
if (!$admin) {
    json_out(['authenticated' => false]);
}

json_out(['authenticated' => true, 'username' => $admin['username']]);
