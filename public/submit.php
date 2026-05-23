<?php
header("Content-Type: application/json");

// Basic rate protection (optional improvement)
session_start();
if (!isset($_SESSION['last_submit'])) {
    $_SESSION['last_submit'] = 0;
}

if (time() - $_SESSION['last_submit'] < 10) {
    echo json_encode(["success" => false, "message" => "Too many requests. Try again later."]);
    exit;
}

// Collect data
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$type = trim($_POST['type'] ?? '');
$message = trim($_POST['message'] ?? '');
$honey = trim($_POST['honey'] ?? '');
$captcha = trim($_POST['captcha'] ?? '');

// Spam checks
if (!empty($honey)) {
    echo json_encode(["success" => false, "message" => "Spam detected"]);
    exit;
}

if ($captcha != "7") {
    echo json_encode(["success" => false, "message" => "Captcha failed"]);
    exit;
}

// Validation
if (strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid form data"]);
    exit;
}

// Email content
$to = "info@degrills.com";
$subject = "New Contact Form Submission - $type";

$body = "
Name: $name
Email: $email
Phone: $phone
Type: $type

Message:
$message
";

$headers = "From: $email";

// Send mail
$sent = mail($to, $subject, $body, $headers);

$_SESSION['last_submit'] = time();

if ($sent) {
    echo json_encode(["success" => true, "message" => "Form submitted successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to send message"]);
}
