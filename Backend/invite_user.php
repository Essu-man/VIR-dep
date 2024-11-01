<?php
include('db_connection.php');

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$name = $data['name'];
$role = $data['role'];
$token = bin2hex(random_bytes(32));

$stmt = $conn->prepare("INSERT INTO user_invitations (email, name, role, token) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $email, $name, $role, $token);
if ($stmt->execute()) {
    // Send email logic here
    $link = "https://yourdomain.com/register.php?token=$token";
    mail($email, "DVLA User Invitation", "Hello $name, please register using this link: $link");
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}
?>
