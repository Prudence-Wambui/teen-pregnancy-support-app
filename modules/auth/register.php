<?php
// modules/auth/register.php

require_once '../../config/database.php';
require_once '../../config/constants.php';
require_once 'auth_controller.php';

session_start(); // Start session early

// Securely capture and sanitize input
$role = isset($_POST['role']) ? htmlspecialchars(trim($_POST['role'])) : null;
$full_name = isset($_POST['full_name']) ? htmlspecialchars(trim($_POST['full_name'])) : null;
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : null;
$phone_number = isset($_POST['phone_number']) ? htmlspecialchars(trim($_POST['phone_number'])) : null;
$date_of_birth = isset($_POST['date_of_birth']) ? htmlspecialchars(trim($_POST['date_of_birth'])) : null;
$password = $_POST['password'] ?? '';
$confirm_password = $_POST['confirm_password'] ?? '';

if (!$role || !$full_name || !$email || !$date_of_birth || !$password || !$confirm_password) {
    die('All required fields must be filled out.');
}

if ($password !== $confirm_password) {
    die('Passwords do not match.');
}

// Call secure registration function
$registrationSuccess = registerUser($role, $email, $password, $full_name, $phone_number, $date_of_birth);

if ($registrationSuccess) {
    header('Location: pages/login.html?success=1');
    exit;
} else {
    echo "Registration failed. Please try again.";
}
?>
