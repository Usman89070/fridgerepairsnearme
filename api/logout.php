<?php
require_once __DIR__ . '/auth.php';

$_SESSION = [];
session_destroy();

json_out(['ok' => true]);
