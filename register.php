<?php
include('functions/user.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

if(isset($obj['email']) && isset($obj['password']) && isset($obj['firstName']) && isset($obj['lastName'])){

    $email = $obj['email'];
    $firstName = $obj['firstName'];
    $lastName = $obj['lastName'];
    $password = $obj['password'];

    $userAdded = addUser($email, $firstName, $lastName, $password);

    if($userAdded){
        echo "success";
    }else {
        echo "User already exists";
    }
}else {
    echo "error";
}

?>