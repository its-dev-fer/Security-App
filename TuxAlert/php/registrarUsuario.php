<?php

    function salir(){
        header("location: #pantallaPrincipal");
    }

    $serverName= "127.0.0.1";
    $userName= "root";  
    $password= "";
    $dbName= "tuxalert_app_db";
    // Create Connection DB
    $conn= new mysqli($serverName, $userName, $password, $dbName);
    // Check connection
    if($conn->connect_error)
        die("Conexión fallida con la BD: " .$conn->connect_error);
    if(isset($_POST['registarBD'])){
        $nombreUsuario= $_POST['nombreUsuario'];
        $apellidoUsuario= $_POST['apellidoUsuario'];
        $generoUsuario= $_POST['generoUsuario'];
        $emailUsuario= $_POST['emailUsuario'];
        $fechaUsuario= $_POST['fechaUsuario'];
        $numeroUsuario= $_POST['numeroUsuario'];
        $contraseniaUsuario= $_POST['contraseniaUsuario'];
        $contraseniaRepetidaUsuario= $_POST['contraseniaRepetidaUsuario'];
        $passEnc= md5($contraseniaUsuario);

        $sql= "INSERT INTO Usuarios (
            Nombre,
            Apellidos,
            Correo_electronico,
            Fecha_nacimiento,
            Telefono,
            Contrasenia,
            Genero,
            Borrado,
            ID_TipoUsuario
        ) VALUES (
            '$nombreUsuario',
            '$apellidoUsuario',
            '$emailUsuario',
            '$fechaUsuario',
            '$numeroUsuario',
            '$passEnc',
            '$generoUsuario',
            '1', 
            '1'
        )";

        if($conn->query($sql) == TRUE){
            //echo $conn."<br>";
            console.log("Usuario agregado exitósamente");
            salir();
        }
        else
            console.log("No se pudo agregar el usuario");
        mysqli_close($conn);
    }
?>