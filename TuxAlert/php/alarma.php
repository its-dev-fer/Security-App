<?php
    $myfile = fopen("error_og.txt", "w") or die("Unable to open file!");
    $serverName= "127.0.0.1";
    $userName= "root";
    $password= "";
    $dbName= "tuxalert_app_db";
    // Create Connection DB
    $conn= new mysqli($serverName, $userName, $password, $dbName);
    // Check connection
    if($conn->connect_error)
        die("Conexión fallida con la BD: " .$conn->connect_error);

    $lat = $_POST['latitud'];
    $longi = $_POST['longitud'];
    $date = date("m/d/Y h:i A");
    $hora = date("Y-m-d H:i:s");

    $final = strtotime($date);
    $time_posted = date("Y-m-d H:i:s", $final);

    fwrite($myfile, $lat);
    fwrite($myfile, $longi);
    fwrite($myfile, $fecha);
    fwrite($myfile, $hora);

    $sql = "INSERT INTO alertas(Fecha,Hora,Latitud,Longitud) VALUES('$time_posted',NOW(),'$lat','$longi')";
    fwrite($myfile, $conn->error);
    fclose($myfile);


    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        mysqli_close($conn);
        //header("location: www.google.com.mx");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        exit();
    }