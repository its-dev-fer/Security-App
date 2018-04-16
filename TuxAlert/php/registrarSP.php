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

    $nombreUsuario= $_POST['nombreUsuarioSP'];
        $apellidoUsuario= $_POST['apellidoUsuarioSP'];
        $generoUsuario= $_POST['generoSP'];
        $emailUsuario= $_POST['emailUsuarioSP'];
        $fechaUsuario= $_POST['fechaUsuarioSP'];
        $numeroUsuario= $_POST['numeroUsuarioSP'];
        $contraseniaUsuario= $_POST['contraseniaUsuarioSP'];
        $contraseniaRepetidaUsuario= $_POST['contraseniaRepetidaUsuarioSP'];
        $passEnc= md5($contraseniaUsuario);

    if($contraseniaUsuario == $contraseniaRepetidaUsuario){
        $sql= "INSERT INTO usuarios (
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
            '2'
        )";

        if($conn->query($sql) == TRUE){
            //echo $conn."<br>";
            mysqli_close($conn);
            header("location: ../index.html#tarjeta-login");
            exit();
        }else{
            mysqli_close($conn);
            header("location: ../index.html#tarjeta-login");
            exit();
        }
    }else{
        header("location: ../index.html#tarjeta-login");
    }