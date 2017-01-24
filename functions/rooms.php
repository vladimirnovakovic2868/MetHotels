<?php
include("config.php");

function findRoomByNumber($number){
    global $conn;
    $sql = "SELECT * FROM rooms WHERE number=?";

    $query = $conn->prepare($sql);
    $query->bind_param('s',$number);
    $query->execute();
    $query->store_result();
    $query->bind_result($id, $hotelId, $number, $size, $bed_number);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
            "hotelId" => $hotelId,
            "bedNumber" => $bed_number,
            "size" => $size,
            "number" => $number
        );
    }

    return $rooms;
    $query->close();
}

function findRoomBySize($number){
    global $conn;
    $sql = "SELECT * FROM rooms WHERE size=?";

    $query = $conn->prepare($sql);
    $query->bind_param('s',$number);
    $query->execute();
    $query->store_result();
    $query->bind_result($id, $hotelId, $number, $size, $bed_number);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
            "hotelId" => $hotelId,
            "bedNumber" => $bed_number,
            "size" => $size,
            "number" => $number
        );
    }

    return $rooms;
    $query->close();
}

function findRoomByNumberOfBeds($number){
    global $conn;
    $sql = "SELECT * FROM rooms WHERE bed_number=?";

    $query = $conn->prepare($sql);
    $query->bind_param('s',$number);
    $query->execute();
    $query->store_result();
    $query->bind_result($id, $hotelId, $number, $size, $bed_number);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
            "hotelId" => $hotelId,
            "bedNumber" => $bed_number,
            "size" => $size,
            "number" => $number
        );
    }

    return $rooms;
    $query->close();
}

function findRoomByNumberOfBedsAndSize($beds, $size){
    global $conn;
    $sql = "SELECT * FROM rooms WHERE bed_number=? AND size=?";
    $query = $conn->prepare($sql);
    $query->bind_param('ss',$beds,$size);
    $query->execute();
    $query->store_result();
    $query->bind_result($id, $hotelId, $number, $size, $bed_number);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
            "hotelId" => $hotelId,
            "bedNumber" => $bed_number,
            "size" => $size,
            "number" => $number
        );
    }

    return $rooms;
    $query->close();
}

function findAllRooms(){
    global $conn;
    $sql = "SELECT * FROM rooms";
    $query = $conn->prepare($sql);
//    $query->bind_param('ss',$beds,$size);
    $query->execute();
    $query->store_result();
    $query->bind_result($id, $hotelId, $number, $size, $bed_number);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
            "hotelId" => $hotelId,
            "bedNumber" => $bed_number,
            "size" => $size,
            "number" => $number
        );
    }

    return $rooms;
    $query->close();
}

function addRoom($hotel, $roomNumber, $roomSize, $bedNumber)
{
    $insert = "INSERT INTO rooms (hotel_id, number, size, bed_number) VALUES (?,?,?,?)";
    global $conn;

    $query = $conn->prepare($insert);
    $query->bind_param('ssss', $hotel, $roomNumber, $roomSize, $bedNumber);
    $query->execute();

    $query->close();
    return true;
}

function updateRoom($id, $hotel, $roomNumber, $roomSize, $bedNumber)
{
    $insert = "UPDATE rooms SET hotel_id=?, number=?, size=?, bed_number=? WHERE id=?";
    global $conn;

    $query = $conn->prepare($insert);
    $query->bind_param('ssssi', $hotel, $roomNumber, $roomSize, $bedNumber, $id);
    $query->execute();

    $query->close();
    return true;
}

function deleteRoom($id)
{
    $insert = "DELETE FROM rooms WHERE id=?";
    global $conn;

    $query = $conn->prepare($insert);
    $query->bind_param('i', $id);
    $query->execute();

    $query->close();
    return true;
}
