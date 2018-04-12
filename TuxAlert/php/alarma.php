<?php
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

    $sql= "INSERT INTO ubicacionesalertas (
    		Latitud,
    		Longitud
        ) VALUES (
            '$lat',
            '$longi'
        )";

    $sql2 = "INSERT INTO alertas (
            ID_CategoriaAlerta,
            ID_UbicacionAlerta,
            Fecha,
            Hora
        ) VALUES (
            (SELECT ID_CategoriaAlerta FROM categoriasalertas WHERE Nombre_Categoria = '$categoria'),
            (SELECT ID_UbicacionAlerta FROM ubicacionesalertas WHERE Latitud = '$lat' AND Longitud = '$longi'),
            '$fecha',
            '$hora'
        )"; 
    $conn->query($sql);
    $conn->query($sql2);

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        mysqli_close($conn);
        //header("location: www.google.com.mx");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        //header("location: www.facebook.com");
        exit();
    }