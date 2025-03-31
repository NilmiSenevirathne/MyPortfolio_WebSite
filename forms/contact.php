<?php
// Set CORS headers for local development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Collect form data
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$subject = isset($_POST['subject']) ? $_POST['subject'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

// Check if required fields are present
if (empty($name) || empty($email) || empty($message)) {
    echo "Required fields are missing";
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
    exit;
}

// Your email where you want to receive messages
$to = 'amasenevirathne2001@gmail.com';
$subject_line = "Message from: $name - $subject";

// Construct the email content
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message: \n$message";

// Set headers for the email
$headers = "From: $email" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

// Send the email using PHP's mail() function
if (mail($to, $subject_line, $email_content, $headers)) {
    echo 'OK'; // This matches what the JS is expecting for success
} else {
    echo 'Error: Unable to send your message.';
}
?>