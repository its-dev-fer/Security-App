<?php

    function salir(){
        header("location: #pantallaPrincipal");
    }

    $serverName= "127.0.0.1";
    $userName= "root";  
    $password= "";
    $dbName= "tuxalert";
    // Create Connection DB
    $conn= new mysqli($serverName, $userName, $password, $dbName);
    // Check connection
    if($conn->connect_error)
        die("Conexión fallida: " .$conn->connect_error);
   
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

        if($conn->query($sql) == TRUE)
            echo $conn."<br>";
        else
            echo $conn."<br>";
        mysqli_close($conn);
        //salir();
        ?>