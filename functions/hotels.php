<?php
include("config.php");


function findAllHotels(){
    global $conn;
    $sql = "SELECT * FROM hotels";
    $query = $conn->prepare($sql);
    $query->execute();
    $query->store_result();
    $query->bind_result($id, $name, $city, $stars, $description, $image);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
            "name" => $name,
            "city" => $city,
            "stars" => $stars,
            "description" => $description,
            "image" => $image
        );
    }

    return $rooms;
    $query->close();
}

function addHotel($name, $city, $stars, $description, $imageUrl)
{
    $insert = "INSERT INTO hotels (name, city, stars, description, image) VALUES (?,?,?,?,?)";
    global $conn;

    $query = $conn->prepare($insert);
    $query->bind_param('ssiss', $name, $city, $stars, $description, $imageUrl);
    $query->execute();

    $query->close();
    return true;
}