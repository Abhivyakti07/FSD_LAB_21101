<?php
$servername = "localhost"; // Change this if your database is on a different server
$username = "your_username"; // Your MySQL username
$password = "your_password"; // Your MySQL password
$dbname = "your_database_name"; // Your database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
