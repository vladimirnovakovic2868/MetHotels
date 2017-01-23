<?php
include("config.php");

function findRoomByNumber($number){
    global $conn;
    $sql = "SELECT * FROM rooms WHERE number=?";

    $query = $conn->prepare($sql);
    $query->bind_param('s',$number);
    $query->execute();
    $query->store_result();
    $query->bind_result($id, $number, $size, $bed_number);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
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
    $query->bind_result($id, $number, $size, $bed_number);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
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
    $query->bind_result($id, $number, $size, $bed_number);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
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
    $query->bind_result($id, $number, $size, $bed_number);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
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
    $query->bind_result($id, $number, $size, $bed_number);

    $rooms = [];

    while ($query->fetch()) {
        $rooms[] = Array(
            "id" => $id,
            "bedNumber" => $bed_number,
            "size" => $size,
            "number" => $number
        );
    }

    return $rooms;
    $query->close();
}

?>