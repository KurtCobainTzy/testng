<?php
// ============================================
//  enroll.php — Save enrollment to MySQL
//  Place this in htdocs/WebSystem/
// ============================================

session_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'db.php';

$raw   = file_get_contents('php://input');
$input = json_decode($raw, true);
if (!is_array($input)) $input = [];
$data  = array_merge($_POST, $input);
$action = isset($_GET['action']) ? $_GET['action'] : (isset($data['action']) ? $data['action'] : '');

    // Add this right after the $action = ... line

function requireAdminSession() {
    if (!isset($_SESSION['user_id']) || $_SESSION['user_role'] !== 'admin') {
        echo json_encode(['success' => false, 'message' => 'Unauthorized.']);
        exit;
    }
}
switch ($action) {
    

    // ── SUBMIT ENROLLMENT ──
    case 'submit':
        $name      = trim($data['name'] ?? '');
        $age       = intval($data['age'] ?? 0);
        $contact   = trim($data['contact'] ?? '');
        $email     = strtolower(trim($data['email'] ?? ''));
        $days      = trim($data['days'] ?? '');
        $time_slot = trim($data['time'] ?? '');
        $mode      = trim($data['mode'] ?? '');
        $level     = trim($data['level'] ?? '');
        $frequency = trim($data['frequency'] ?? '');
        $goals     = trim($data['goals'] ?? '');
        $source    = trim($data['source'] ?? '');

        // Validation
        if (!$name || !$contact || !$email || !$days || !$time_slot || !$mode || !$level) {
            echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
            exit;
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
            exit;
        }

        // Generate reference ID
        $ref_id = 'GTR-' . strtoupper(base_convert(time(), 10, 36) . bin2hex(random_bytes(2)));

        $db = getDB();

        $stmt = $db->prepare("INSERT INTO enrollments 
            (ref_id, name, age, email, contact, days, time_slot, mode, level, frequency, goals, source, status) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pending')");

        $stmt->bind_param('ssisssssssss',
            $ref_id, $name, $age, $email, $contact,
            $days, $time_slot, $mode, $level,
            $frequency, $goals, $source
        );

        if ($stmt->execute()) {
            echo json_encode([
                'success' => true,
                'message' => 'Enrollment submitted successfully!',
                'refId'   => $ref_id
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to save enrollment. Please try again.']);
        }

        $stmt->close();
        $db->close();
        break;

    // ── GET ALL ENROLLMENTS (admin) ──
    case 'getAll':
        requireAdminSession();
        $db = getDB();
        $result = $db->query("SELECT * FROM enrollments ORDER BY submitted_at DESC");
        $enrollments = [];
        while ($row = $result->fetch_assoc()) {
            $enrollments[] = $row;
        }
        echo json_encode(['success' => true, 'enrollments' => $enrollments]);
        $db->close();
        break;

    // ── UPDATE STATUS (admin) ──
    case 'updateStatus':
        requireAdminSession();
        $ref_id = trim($data['refId'] ?? '');
        $status = trim($data['status'] ?? '');
        $allowed = ['Pending', 'Confirmed', 'Declined', 'Completed'];

        if (!$ref_id || !in_array($status, $allowed)) {
            echo json_encode(['success' => false, 'message' => 'Invalid data.']);
            exit;
        }

        $db = getDB();
        $stmt = $db->prepare("UPDATE enrollments SET status = ? WHERE ref_id = ?");
        $stmt->bind_param('ss', $status, $ref_id);
        $stmt->execute();
        echo json_encode(['success' => true, 'message' => 'Status updated.']);
        $stmt->close();
        $db->close();
        break;

    // ── UPDATE ADMIN NOTES ──
    case 'updateNotes':
        requireAdminSession();
        $ref_id = trim($data['refId'] ?? '');
        $notes  = trim($data['notes'] ?? '');

        if (!$ref_id) {
            echo json_encode(['success' => false, 'message' => 'Invalid data.']);
            exit;
        }

        $db = getDB();
        $stmt = $db->prepare("UPDATE enrollments SET admin_notes = ? WHERE ref_id = ?");
        $stmt->bind_param('ss', $notes, $ref_id);
        $stmt->execute();
        echo json_encode(['success' => true, 'message' => 'Notes saved.']);
        $stmt->close();
        $db->close();
        break;

    // ── DELETE ENROLLMENT ──
    case 'delete':
        requireAdminSession();
        $ref_id = trim($data['refId'] ?? '');
        if (!$ref_id) { echo json_encode(['success' => false, 'message' => 'Invalid data.']); exit; }

        $db = getDB();
        $stmt = $db->prepare("DELETE FROM enrollments WHERE ref_id = ?");
        $stmt->bind_param('s', $ref_id);
        $stmt->execute();
        echo json_encode(['success' => true, 'message' => 'Enrollment deleted.']);
        $stmt->close();
        $db->close();
        break;

    default:
        echo json_encode(['success' => false, 'message' => 'Invalid action.']);
        break;
}
?>
