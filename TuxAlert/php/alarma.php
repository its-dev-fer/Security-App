<?php
	session_start();
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
    $fecha = date("j, n, Y");
    $hora = date("H:i:s");
    $categoria = "Emergencia";

    $sql= "INSERT INTO alertas (
    		Fecha,
    		Hora
        ) VALUES (
            '$fecha',
            '$hora'
        )";

    $conn->query($sql);

    $sql2 = "INSERT INTO categoriasalertas (
    		Nombre_Categoria
        ) VALUES (
            '$categoria'
        )";
    
    $conn->query($sql2);

    $sql3 = "INSERT INTO ubicacionesalertas (
    		Latitud,
    		Longitud
        ) VALUES (
            '$latitud',
            '$longitud'
        )";

    $conn->query($sql3);
    mysqli_close($conn);
	exit();