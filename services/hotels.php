<?php
include('../functions/hotels.php');


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$json = file_get_contents('php://input');
$obj = json_decode($json, true);

if(isset($obj['name']) && isset($obj['city']) && isset($obj['stars']) && isset($obj['description']) && isset($obj['image'])){
    $name =  $obj['name'];
    $city = $obj['city'];
    $stars = $obj['stars'];
    $description = $obj['description'];
    $imageUrl = $obj['image'];

    addHotel($name, $city, $stars, $description, $imageUrl);
    $result = array(
        "status" => "1"
    );
    print json_encode($result);

}else {
    $roomList = findAllHotels();

    print json_encode($roomList);
}
