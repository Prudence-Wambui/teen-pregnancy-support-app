<?php
// index.php

session_start();

// Check if user is already logged in
if (isset($_SESSION['user_id']) && isset($_SESSION['role'])) {
    
    if ($_SESSION['role'] === 'expectant_teen') {
        // Redirect to teen dashboard
        header('Location: modules/dashboard/pages/teen_dashboard.html');
        exit;

    } elseif ($_SESSION['role'] === 'guardian') {
        // Redirect to guardian dashboard
        header('Location: modules/dashboard/pages/guardian_dashboard.html');
        exit;

    } else {
        // Unknown role detected, force logout
        header('Location: modules/auth/logout.php');
        exit;
    }

} else {
    // User not logged in, show landing page
    header('Location: landing.html');
    exit;
}
?>
