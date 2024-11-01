
include('db_connection.php');

$token = $_GET['token'];
$stmt = $conn->prepare("SELECT * FROM user_invitations WHERE token = ? AND used = 0");
$stmt->bind_param("s", $token);
$stmt->execute();
$invitation = $stmt->get_result()->fetch_assoc();

if ($invitation) {
  // Complete registration logic and assign role
  $role = $invitation['role'];
  // Insert user into users table with this role, mark token as used
  $updateStmt = $conn->prepare("UPDATE user_invitations SET used = 1 WHERE token = ?");
  $updateStmt->bind_param("s", $token);
  $updateStmt->execute();
} else {
  echo "Invalid or expired invitation.";
}
