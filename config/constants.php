<?php
// config/constants.php

// Application settings
define('APP_NAME', 'Teen Pregnancy Support');
define('APP_VERSION', '1.0');
define('APP_URL', 'http://localhost/teen-pregnancy-support-app'); // Your base URL

// Database settings (optional if you want to separate config)
define('DB_HOST', 'localhost');
define('DB_NAME', 'teen_pregnancy_support');
define('DB_USER', 'root');
define('DB_PASS', 'b3YE2UXY4S!8CER');

// Session settings
define('SESSION_TIMEOUT', 3600); // Session timeout in seconds (1 hour)

// File upload settings
define('UPLOAD_DIR', __DIR__ . '/../uploads/');  // Root upload directory
define('PROFILE_PHOTOS_DIR', UPLOAD_DIR . 'profile_photos/');
define('SUPPORT_ATTACHMENTS_DIR', UPLOAD_DIR . 'support_attachments/');

// Security settings
define('PASSWORD_HASH_COST', 12); // Bcrypt hashing cost factor

// Email settings (if needed for future)
define('SUPPORT_EMAIL', 'support@teenpregnancyapp.com');
?>

