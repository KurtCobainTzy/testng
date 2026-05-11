<?php
header('Content-Type: application/json');
require_once 'db.php'; // Gagamit ng $conn mula dito

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $chord_name  = $_POST['chord_name'];
    $chord_label = $_POST['chord_label'];
    $title       = $_POST['title'];

    // File handling
    $file     = $_FILES['video'];
    $ext      = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    $filename = 'chord_' . time() . '.' . $ext;
    $dest     = 'videos/' . $filename;

    if (move_uploaded_file($file['tmp_name'], $dest)) {
        // SQL using $conn (mysqli)
        $sql = "INSERT INTO chord_videos (chord_name, chord_label, filename, title) 
                VALUES ('$chord_name', '$chord_label', '$filename', '$title')";
        
        if ($conn->query($sql)) {
            echo json_encode(['success' => true, 'message' => 'Uploaded!']);
        } else {
            echo json_encode(['success' => false, 'message' => $conn->error]);
        }
    }
}
?>