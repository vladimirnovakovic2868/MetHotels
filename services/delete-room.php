<?php
include('../functions/rooms.php');


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

if(isset($obj['id'])){
    $id =  $obj['id'];

    deleteRoom($id);
    $result = array(
        "id" => $id,
        "status" => "delete room"
    );

    echo json_encode($result);
}