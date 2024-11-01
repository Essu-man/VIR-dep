
function check_permission($user_id, $permission) {
  include('db_connection.php');
  $stmt = $conn->prepare("SELECT roles.permissions FROM users JOIN roles ON users.role_id = roles.id WHERE users.id = ?");
  $stmt->bind_param("i", $user_id);
  $stmt->execute();
  $role = $stmt->get_result()->fetch_assoc();
  $permissions = json_decode($role['permissions'], true);
  return $permissions[$permission] ?? false;
}
