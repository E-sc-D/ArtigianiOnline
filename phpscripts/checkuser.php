<?php 

    include_once "config.php";

    if (!isset($_POST['user']))
    {
        if (isset($_SESSION['user']))
        {
            $user = $_SESSION["user"];
            $pass = $_SESSION["password"];
            echo '1';
            die();
        } 
        else 
        {
            print_r($_POST);//no account data coud be found
            die();
        }
    } 
    else
    {
    // print_r("session started");  
        $user = $_POST['user'];
        $pass = $_POST['password'];
    }

    if (!$conn) 
    {
        echo"8";// database not selectabe .mysqli_error($conn);
        die();
    }

    //ask the database if the email received exists
    $userRequest = "SELECT * FROM `artigiano` WHERE email LIKE '" . $user . "';";
    $userdata = mysqli_query($conn, $userRequest);
    
    if (!$userdata) 
    {
       echo "9";//.mysqli_error($conn) database error
       die();
    }

    $userdata  = mysqli_fetch_array($userdata, MYSQLI_ASSOC);
    //check if the password is right

    if ($userdata === null) 
    {
        echo"10";//email not existing
        die();
    }

    if ($userdata["password"] != $pass)
    {
        echo"11";//email not existing
        die();
    }


    $_SESSION["user"] = $user;
    $_SESSION["password"] = $pass;

    echo '1';//equivalent to fine
    

   