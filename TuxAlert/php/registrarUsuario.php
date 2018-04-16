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

        $nombreUsuario= $_POST['nombreUsuario'];
        $apellidoUsuario= $_POST['apellidoUsuario'];
        $generoUsuario= $_POST['generoUsuario'];
        $emailUsuario= $_POST['emailUsuario'];
        $fechaUsuario= $_POST['fechaUsuario'];
        $numeroUsuario= $_POST['numeroUsuario'];
        $contraseniaUsuario= $_POST['contraseniaUsuario'];
        $contraseniaRepetidaUsuario= $_POST['contraseniaRepetidaUsuario'];
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
            '1'
        )";

        if($conn->query($sql) == TRUE){
            //echo $conn."<br>";
            mysqli_close($conn);
            echo "<script>";
            echo "alert('Se ha registrado al usuario.');";
            echo "window.location = '../index.html#tarjeta-login';";
            echo "</script>";
            //header("location: ../index.html#tarjeta-login");
            exit();        
        }else{
            mysqli_close($conn);
            echo "<script>";
            echo "alert('El usuario ya existe');";
            echo "window.location = '../index.html#registro';";
            echo "</script>";
        }
    }else{
        echo "<script>";
        echo "alert('Las contraseñas no coinciden...');";
        echo "window.location = '../index.html#registro';";
        echo "</script>";
    }