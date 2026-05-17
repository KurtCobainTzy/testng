<?php
session_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'db.php';

$raw    = file_get_contents('php://input');
$input  = json_decode($raw, true);
if (!is_array($input)) $input = [];
$data   = array_merge($_POST, $input);
$action = isset($_GET['action']) ? $_GET['action'] : (isset($data['action']) ? $data['action'] : '');

switch ($action) {

    case 'signup':
    $name     = trim($data['name'] ?? '');
    $email    = strtolower(trim($data['email'] ?? ''));
    $password = $data['password'] ?? '';

    if (!$name || !$email || !$password) {
        echo json_encode(['success' => false, 'message' => 'Please fill in all fields.']);
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
        exit;
    }
    if (strlen($password) < 6) {
        echo json_encode(['success' => false, 'message' => 'Password must be at least 6 characters.']);
        exit;
    }

    $db = getDB();

    $check = $db->prepare("SELECT id FROM users WHERE email = ?");
    $check->bind_param('s', $email);
    $check->execute();
    $check->store_result();

    if ($check->num_rows > 0) {
        echo json_encode(['success' => false, 'message' => 'Email already registered.']);
        $check->close();
        $db->close();
        exit;
    }
    $check->close();

    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $stmt   = $db->prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, 'student')");
    $stmt->bind_param('sss', $name, $email, $hashed);

    if ($stmt->execute()) {
        $userId = $db->insert_id;

        $log = $db->prepare("INSERT INTO activity_logs (user_id, user_email, action_type, action_detail) VALUES (?, ?, 'signup', 'New account created')");
        $log->bind_param('is', $userId, $email);
        $log->execute();
        $log->close();

        $_SESSION['user_id']    = $userId;
        $_SESSION['user_name']  = $name;
        $_SESSION['user_email'] = $email;
        $_SESSION['user_role']  = 'student';

        echo json_encode([
            'success' => true,
            'message' => 'Account created! Welcome, ' . $name . '!',
            'user'    => ['id' => $userId, 'name' => $name, 'email' => $email, 'role' => 'student']
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Registration failed. Please try again.']);
    }

    $stmt->close();
    $db->close();
    break;

    case 'login':
        $email    = strtolower(trim($data['email'] ?? ''));
        $password = $data['password'] ?? '';

        if (!$email || !$password) {
            echo json_encode(['success' => false, 'message' => 'Please fill in all fields.']);
            exit;
        }

        $db   = getDB();
        $stmt = $db->prepare("SELECT id, name, email, password, role FROM users WHERE email = ?");
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $user   = $result->fetch_assoc();
        $stmt->close();

        if (!$user || !password_verify($password, $user['password'])) {
            echo json_encode(['success' => false, 'message' => 'Invalid email or password.']);
            $db->close();
            exit;
        }

        $upd = $db->prepare("UPDATE users SET last_login = NOW() WHERE id = ?");
        $upd->bind_param('i', $user['id']);
        $upd->execute();
        $upd->close();

        $log = $db->prepare("INSERT INTO activity_logs (user_id, user_email, action_type, action_detail) VALUES (?, ?, 'login', 'User logged in')");
        $log->bind_param('is', $user['id'], $email);
        $log->execute();
        $log->close();

        $_SESSION['user_id']    = $user['id'];
        $_SESSION['user_name']  = $user['name'];
        $_SESSION['user_email'] = $user['email'];
        $_SESSION['user_role']  = $user['role'];

        echo json_encode([
            'success' => true,
            'message' => 'Welcome back, ' . $user['name'] . '!',
            'user'    => [
                'id'    => $user['id'],
                'name'  => $user['name'],
                'email' => $user['email'],
                'role'  => $user['role']
            ]
        ]);

        $db->close();
        break;

    case 'logout':
        if (isset($_SESSION['user_id'])) {
            $db  = getDB();
            $uid = $_SESSION['user_id'];
            $em  = $_SESSION['user_email'];
            $log = $db->prepare("INSERT INTO activity_logs (user_id, user_email, action_type, action_detail) VALUES (?, ?, 'logout', 'User logged out')");
            $log->bind_param('is', $uid, $em);
            $log->execute();
            $log->close();
            $db->close();
        }
        session_destroy();
        echo json_encode(['success' => true, 'message' => 'Logged out successfully.']);
        break;

    case 'check':
        if (isset($_SESSION['user_id'])) {
            echo json_encode([
                'success'  => true,
                'loggedIn' => true,
                'user'     => [
                    'id'    => $_SESSION['user_id'],
                    'name'  => $_SESSION['user_name'],
                    'email' => $_SESSION['user_email'],
                    'role'  => $_SESSION['user_role']
                ]
            ]);
        } else {
            echo json_encode(['success' => true, 'loggedIn' => false]);
        }
        break;

    default:
        echo json_encode(['success' => false, 'message' => 'Invalid action.']);
        break;
}
?>