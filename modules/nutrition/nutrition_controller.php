<?php
require_once __DIR__ . '/../../config/database.php';

// Functions: get daily nutrition tips

function getNutritionTips($trimester) {
    global $pdo;

    $stmt = $pdo->prepare("SELECT * FROM nutrition_tips WHERE trimester = :trimester");
    $stmt->execute([':trimester' => $trimester]);
    return $stmt->fetchAll();
}
?>

