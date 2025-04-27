<?php
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../config/constants.php';

// Functions: login, register, logout

function loginUser($email, $password) {
    global $pdo;

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password_hash'])) {
        session_start();
        $_SESSION['user_id'] = $user['user_id'];
        $_SESSION['role'] = $user['role'];
        return true;
    }
    return false;
}

function registerUser($role, $email, $password, $full_name, $phone, $dob) {
    global $pdo;

    $password_hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => PASSWORD_HASH_COST]);
    $stmt = $pdo->prepare("CALL sp_register_user(:role, :email, :password_hash, :full_name, :phone, :dob)");

    return $stmt->execute([
        ':role' => $role,
        ':email' => $email,
        ':password_hash' => $password_hash,
        ':full_name' => $full_name,
        ':phone' => $phone,
        ':dob' => $dob
    ]);
}

function logoutUser() {
    session_start();
    session_unset();
    session_destroy();
    header('Location: ../../landing.html');
    exit;
}
?>

