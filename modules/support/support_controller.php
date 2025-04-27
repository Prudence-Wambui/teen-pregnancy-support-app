<?php
require_once __DIR__ . '/../../config/database.php';

// Functions: submit support ticket

function submitSupportTicket($user_id, $subject, $message) {
    global $pdo;

    $stmt = $pdo->prepare("CALL sp_submit_support_ticket(:user_id, :subject, :message)");
    return $stmt->execute([
        ':user_id' => $user_id,
        ':subject' => $subject,
        ':message' => $message
    ]);
}
?>

