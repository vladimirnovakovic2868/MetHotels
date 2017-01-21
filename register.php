<?php
include('functions/user.php');

    if(isset($_POST['email']) && isset($_POST['password']) && isset($_POST['firstName']) && isset($_POST['lastName'])){

        $email = $_POST['email'];
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $password = $_POST['password'];

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