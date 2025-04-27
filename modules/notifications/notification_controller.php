<?php
require_once __DIR__ . '/../../config/database.php';

// Functions: get notifications

function getUserNotifications($user_id) {
    global $pdo;

    $stmt = $pdo->prepare("SELECT * FROM notifications WHERE user_id = :user_id ORDER BY sent_at DESC");
    $stmt->execute([':user_id' => $user_id]);
    return $stmt->fetchAll();
}
?>

