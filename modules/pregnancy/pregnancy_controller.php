<?php
require_once __DIR__ . '/../../config/database.php';

// Functions: create pregnancy record

function createPregnancy($user_id, $due_date, $lmp_date = null) {
    global $pdo;

    $stmt = $pdo->prepare("CALL sp_create_pregnancy(:user_id, :due_date, :lmp_date)");
    return $stmt->execute([
        ':user_id' => $user_id,
        ':due_date' => $due_date,
        ':lmp_date' => $lmp_date
    ]);
}
?>

