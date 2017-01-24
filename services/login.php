<?php
session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET');
//header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

include('../functions/user.php');

$json = file_get_contents('php://input');
$obj = json_decode($json, true);
//print_r($obj);

if(isset($obj['email']) && isset($obj['password'])){

    $email = $obj['email'];
    $password = $obj['password'];

    echo login($email,$password);
}else {
    echo "error";
}

?>