<?php
include 'db.php'; // Gagamitin din nito yung db.php mo

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname']; // Kailangan ito para sa Join Guitarify
    $email = $_POST['email'];
    $password = $_POST['password'];

    // I-save sa database
    $sql = "INSERT INTO users (fullname, email, password) VALUES ('$fullname', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "SUCCESS";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>