<?php
include('../functions/rooms.php');


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

if(isset($obj['id']) && isset($obj['hotelId']) && isset($obj['number']) && isset($obj['size']) && isset($obj['bedNumber'])){
    $id =  $obj['id'];
    $hotel =  $obj['hotelId'];
    $roomNumber = $obj['number'];
    $roomSize = $obj['size'];
    $bedNumber = $obj['bedNumber'];

    updateRoom($id, $hotel, $roomNumber, $roomSize, $bedNumber);
    $result = array(
        "status" => "update room"
    );

    echo json_encode($result);

}