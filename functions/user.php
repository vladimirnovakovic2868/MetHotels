<?php
include("config.php");

function checkIfUserExists($username){
    global $conn;
    $sql = "SELECT * FROM users WHERE email=?";

    $query = $conn->prepare($sql);
    $query->bind_param('s',$username);
    $query->execute();
    $query->store_result();

    if ($query->num_rows > 0) {
        return true;
    } else{
        return false;
    }

    $query->close();
}

function addUser($email, $firstName, $lastName, $password)
{
    $md5Password = md5($password);
    $insert = "INSERT INTO users (email, firstName, lastName, password) VALUES (?,?,?,?)";
    global $conn;

    if(!checkIfUserExists($email)) {
        $query = $conn->prepare($insert);
        $query->bind_param('ssss', $email, $firstName, $lastName, $md5Password);
        $query->execute();

        $query->close();
        return true;
    }else {
        return false;
    }
}

function checkUser($username, $password){
    global $conn;
    $sql = "SELECT * FROM users WHERE email=? AND password=?";
    $md5Password = md5($password);

    $query = $conn->prepare($sql);
    $query->bind_param('ss',$username,$md5Password);
    $query->execute();
    $query->store_result();

    if ($query->num_rows > 0) {
        return true;
    } else{
        return false;
    }
    $query->close();
}

function getNameForEmail($email){
    global $conn;
    $sql = "SELECT firstName,lastName FROM Users WHERE email=?";

    $query = $conn->prepare($sql);
    $query->bind_param('s',$email);
    $query->execute();
    $query->store_result();
    $query->bind_result($firstName, $lastName);

    $returnvalue = "";

    while ($query->fetch()) {
        $returnvalue = $firstName . " " . $lastName;
    }
    $query->free_result();
    $query->close();
    return $returnvalue;
}


?>