<?php
require_once __DIR__ . '/../../config/database.php';

// Functions: load platform statistics

function getTotalUsers() {
    global $pdo;

    $stmt = $pdo->query("SELECT COUNT(*) as total FROM users");
    return $stmt->fetchColumn();
}

function getTotalPregnancies() {
    global $pdo;

    $stmt = $pdo->query("SELECT COUNT(*) as total FROM pregnancies");
    return $stmt->fetchColumn();
}
?>

