<?php

    function salir(){
        header("location: #pantallaPrincipal");
    }
    echo '<script type="text/javascript">'.'alert("Holaaaaaaaaa")'.'</script>';

    $serverName= "localhost";
    $userName= "root";  
    $password= "";
    $dbName= "tuxalert_app_db";
    // Create Connection DB
    $conn= new mysqli($serverName, $userName, $password, $dbName);
    // Check connection
    if($conn->connect_error)
        die("Conexión fallida: " .$conn->connect_error);
    if(isset($_POST['button-registrarUsuario'])){
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
            Borrado
            ID_TipoUsuario
        ) VALUES (
            '$nombreUsuario',
            '$apellidoUsuario',
            '$emailUsuario',
            '$fechaUsuario',
            '$numeroUsuario',
            '$contraseniaUsuario',
            '$generoUsuario',
            '1', /* Uno es usuario activo y cero es usuario borrado*/
            '1'
        )";

        if($conn->query($sql) == TRUE)
            echo '<script type="text/javascript">'.'alert("Registro exitóso")'.'</script>';
        else
            echo '<script type="text/javascript">'.'alert("Registro fallido")'.'</script>';
        mysqli_close($conn);
        salir();
    }
?>