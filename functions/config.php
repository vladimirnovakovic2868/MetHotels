<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "met_hotels_db";

$conn = mysqli_connect($servername, $username, $password);

if (!$conn) {
    die("Konekcija ima grešku" . mysqli_connect_error());
}

mysqli_select_db($conn,$database);

//$conn = new mysqli($servername, $username, $password, $database);
//
//if ($conn->connect_error) {
//    die("Konekcija ima grešku: " . $conn->connect_error);
//}

?>