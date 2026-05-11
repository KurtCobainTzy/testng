<?php
// ══════════════════════════════════════
//  GUITARIFY — auth.php
//  Handles login and signup via POST
// ══════════════════════════════════════

header('Content-Type: text/plain; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require_once 'db.php';

// ── Sanitize helper ──
function clean($str) {
    return htmlspecialchars(strip_tags(trim($str)));
}

// ── SIGNUP ──
if (isset($_POST['signup_submit'])) {
    $name    = clean($_POST['signupName']    ?? '');
    $email   = clean($_POST['signupEmail']   ?? '');
    $pass    = $_POST['signupPassword']      ?? '';

    if (!$name || !$email || !$pass) {
        echo 'Please fill in all fields.';
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address.';
        exit;
    }

    if (strlen($pass) < 6) {
        echo 'Password must be at least 6 characters.';
        exit;
    }

    $db   = getDB();
    $hash = password_hash($pass, PASSWORD_BCRYPT);

    // Check if email already exists
    $chk = $db->prepare('SELECT id FROM users WHERE email = ?');
    $chk->bind_param('s', $email);
    $chk->execute();
    $chk->store_result();

    if ($chk->num_rows > 0) {
        echo 'Email already registered. Please log in.';
        $chk->close();
        $db->close();
        exit;
    }
    $chk->close();

    // Insert new user
    $stmt = $db->prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
    $stmt->bind_param('sss', $name, $email, $hash);

    if ($stmt->execute()) {
        echo 'success';
    } else {
        echo 'Signup failed. Please try again.';
    }

    $stmt->close();
    $db->close();
    exit;
}

// ── LOGIN ──
if (isset($_POST['login_submit'])) {
    $email = clean($_POST['loginEmail']    ?? '');
    $pass  = $_POST['loginPassword']       ?? '';

    if (!$email || !$pass) {
        echo 'Please fill in all fields.';
        exit;
    }

    $db   = getDB();
    $stmt = $db->prepare('SELECT id, name, password FROM users WHERE email = ?');
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        echo 'No account found with that email.';
        $stmt->close();
        $db->close();
        exit;
    }

    $stmt->bind_result($id, $name, $hash);
    $stmt->fetch();

    if (password_verify($pass, $hash)) {
        // Return name so JS can display it
        echo 'success|' . $name;
    } else {
        echo 'Incorrect password.';
    }

    $stmt->close();
    $db->close();
    exit;
}

// ── Unknown request ──
echo 'Invalid request.';
?>