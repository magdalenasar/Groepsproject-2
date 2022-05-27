<?php
$servername = "185.115.218.166";
$username = "fs_stevent";
$password = "Z7NuATyqqKbD";
$dbname = "fs_stevent";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
//var_dump($conn);
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);  // Check connection
?>