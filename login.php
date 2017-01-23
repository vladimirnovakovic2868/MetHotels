<?php
session_start();
include('functions/user.php');


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);
print_r($obj);

if(isset($obj['email']) && isset($obj['password'])){

    $email = $obj['email'];
    $password = $obj['password'];

    $userChecked = checkUser($email, $password);

    if($userChecked){
        $userName =  getNameForEmail($email);
        $_SESSION['username'] = $userName;
        $result = array(
            "status" => "1",
            "username" => $userName
        );

        echo json_encode($result);
    }else {
        echo "User not found";
    }
}else {
    echo "error";
}

?>