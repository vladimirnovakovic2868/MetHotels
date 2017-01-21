<?php
session_start();
include('functions/user.php');

if(isset($_POST['email']) && isset($_POST['password'])){

    $email = $_POST['email'];
    $password = $_POST['password'];

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