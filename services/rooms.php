<?php
include('../functions/rooms.php');


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

if(isset($obj['hotel']) && isset($obj['number']) && isset($obj['size']) && isset($obj['beds'])){
    $hotel =  $obj['hotel'];
    $roomNumber = $obj['number'];
    $roomSize = $obj['size'];
    $bedNumber = $obj['beds'];

    addRoom($hotel, $roomNumber, $roomSize, $bedNumber);
    $result = array(
        "status" => "1"
    );

    echo json_encode($result);

}else if(isset($_GET['bedNumber']) && isset($_GET['size'])){
    $bedNumber = $_GET['bedNumber'];
    $size = $_GET['size'];
    $roomList = findRoomByNumberOfBedsAndSize($bedNumber, $size);

    print json_encode($roomList);
}else if(isset($_GET['bedNumber'])){
    $bedNumber = $_GET['bedNumber'];
    $roomList = findRoomByNumberOfBeds($bedNumber);

    print json_encode($roomList);
}else if(isset($_GET['size'])){
    $size = $_GET['size'];
    $roomList = findRoomBySize($size);

    print json_encode($roomList);
}else {
    $roomList = findAllRooms();

    print json_encode($roomList);
}

?>