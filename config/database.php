<?php
// config/database.php

$host = 'localhost';          // Database server (often localhost)
$dbname = 'teen_pregnancy_support'; // Your MySQL database name
$username = 'root';     // Your MySQL username
$password = 'b3YE2UXY4S!8CER';     // Your MySQL password

try {
    // PDO connection with error mode set to exceptions
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

    // Set PDO attributes for error reporting and security
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

} catch (PDOException $e) {
    // If there is an error, display user-friendly message (never expose DB credentials!)
    echo "Database connection failed: " . htmlspecialchars($e->getMessage());
    exit;
}
?>
