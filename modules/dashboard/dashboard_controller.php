<?php
require_once __DIR__ . '/../../config/database.php';

// Functions: load data for dashboard (future, based on user role)

function getUserPregnancies($user_id) {
    global $pdo;

    $stmt = $pdo->prepare("SELECT * FROM pregnancies WHERE user_id = :user_id ORDER BY created_at DESC");
    $stmt->execute([':user_id' => $user_id]);
    return $stmt->fetchAll();
}
?>

