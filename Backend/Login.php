<?php
// Set response type to JSON
header("Content-Type: application/json");

// Database connection variables
$host = "localhost";
$username = "root";
$password = "";
$dbname = "vir-admin 1";

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed"]);
    exit();
}

// Get JSON data from request
$data = json_decode(file_get_contents("php://input"), true);

// Extract email and password from the request
$email = $data['email'] ?? '';
$pass = $data['password'] ?? '';

// Check if email and password are provided
if (empty($email) || empty($pass)) {
    echo json_encode(["status" => "error", "message" => "Email and password are required"]);
    exit();
}

// Query to get the user by email
$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

// Check if user exists
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    // Verify password
    if (password_verify($pass, $user['password'])) {
        echo json_encode(["status" => "success", "message" => "Login successful"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid credentials"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid credentials"]);
}

// Close connections
$stmt->close();
$conn->close();
?>
