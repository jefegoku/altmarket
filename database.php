<?php
$servername = "149.22.84.143:5618";
$username = "root";
$password = "";
$dbname = "altmarket

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
