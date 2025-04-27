<?php
require_once __DIR__ . '/../../config/database.php';

// Functions: load content

function getAllContent() {
    global $pdo;

    $stmt = $pdo->query("SELECT * FROM educational_content ORDER BY created_at DESC");
    return $stmt->fetchAll();
}
?>

