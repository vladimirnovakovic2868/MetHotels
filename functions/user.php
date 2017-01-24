<?php
include("config.php");

function checkIfLoggedIn(){
    global $conn;
    if(isset($_SERVER['HTTP_TOKEN'])){
        $token = $_SERVER['HTTP_TOKEN'];
        $result = mysqli_query($conn, "SELECT * FROM users WHERE token='$token'");
        $num_rows = mysqli_num_rows($result);
        if($num_rows > 0)
        {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

function login($username, $password){
    global $conn;
    $rarray = array();
    if(checkLogin($username,$password)){
        $id = sha1(uniqid());
        $result2 = mysqli_query($conn,"UPDATE users SET token='$id' WHERE email='$username'");
        $rarray['token'] = $id;
        $rarray['username'] =  getNameForEmail($username);
    } else{
        $rarray['error'] = "Invalid username/password";
    }
    return json_encode($rarray);
}

function checkLogin($username, $password){
    global $conn;
    $username = mysqli_real_escape_string($conn,$username);
    $password = md5(mysqli_real_escape_string($conn,$password));
    $result = mysqli_query($conn, "SELECT * FROM users WHERE email='$username' AND password='$password'");
    $num_rows = mysqli_num_rows($result);
    if($num_rows > 0)
    {
        return true;
    }
    else{
        return false;
    }
}

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
    global $conn;
    $errors = "";

    if(checkIfUserExists($email)) {
        $errors .= "Username already exists\r\n";
    }
    if(strlen($email) < 5){
        $errors .= "Username must have at least 5 characters\r\n";
    }
    if(strlen($password) < 5){
        $errors .= "Password must have at least 5 characters\r\n";
    }
    if(strlen($firstName) < 3){
        $errors .= "First name must have at least 3 characters\r\n";
    }
    if(strlen($lastName) < 3){
        $errors .= "Last name must have at least 3 characters\r\n";
    }

    if ($errors == "") {
        $md5Password = md5($password);
        $insert = "INSERT INTO users (email, firstName, lastName, password) VALUES (?,?,?,?)";
        $query = $conn->prepare($insert);
        $query->bind_param('ssss', $email, $firstName, $lastName, $md5Password);
        $executed = $query->execute();
        if($executed){
            $id = sha1(uniqid());
            $result2 = mysqli_query($conn,"UPDATE users SET token='$id' WHERE email='email'");
            $rarray['token'] = $id;
            $rarray['username'] = $firstName . " " . $lastName;
        }else{
            $rarray['error'] = "Database connection error";
        }
        $query->close();
    } else {
        $rarray['error'] = json_encode($errors);
    }

        return json_encode($rarray);
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