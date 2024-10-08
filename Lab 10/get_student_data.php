<?php
$host = "localhost"; // Database host
$user = "root";      // Database username
$pass = "";          // Database password
$db = "student_db";  // Database name

$conn = new mysqli($host, $user, $pass, $db);

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['cgpa'])) {
    $cgpa = $_POST['cgpa'];
    
    // Query to get students with matching CGPA
    $query = "SELECT * FROM students WHERE cgpa >= ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("d", $cgpa);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "<p>Name: " . $row['name'] . "<br>";
            echo "CGPA: " . $row['cgpa'] . "<br>";
            echo "Department: " . $row['department'] . "</p>";
        }
    } else {
        echo "No students found with CGPA >= " . $cgpa;
    }
    
    $stmt->close();
}

$conn->close();
?>
