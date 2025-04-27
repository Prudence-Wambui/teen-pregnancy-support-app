<?php
require_once __DIR__ . '/../../config/database.php';

// Functions: schedule visit, mark visit status

function scheduleVisit($pregnancy_id, $scheduled_date, $facility, $doctor, $notes) {
    global $pdo;

    $stmt = $pdo->prepare("CALL sp_schedule_prenatal_visit(:pregnancy_id, :scheduled_date, :facility_name, :healthcare_professional, :notes)");
    return $stmt->execute([
        ':pregnancy_id' => $pregnancy_id,
        ':scheduled_date' => $scheduled_date,
        ':facility_name' => $facility,
        ':healthcare_professional' => $doctor,
        ':notes' => $notes
    ]);
}

function updateVisitStatus($visit_id, $status) {
    global $pdo;

    $stmt = $pdo->prepare("CALL sp_mark_visit_status(:visit_id, :status)");
    return $stmt->execute([
        ':visit_id' => $visit_id,
        ':status' => $status
    ]);
}
?>

