<?php

    function salir(){
<<<<<<< HEAD
        header("location: http://127.0.0.1/index.html#pantallaPrincipal");
    }

    function debug_to_console( $data ) {
    $output = $data;
    if ( is_array( $output ) )
        $output = implode( ',', $output);
        echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
    }

    if(isset($_POST['nombreUsuario'])){
        echo'<script type="text/javascript">
            alert("Hay algo");
            window.location.href="index.php";
            </script>';
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
            debug_to_console($nombreUsuario);
            $apellidoUsuario= $_POST['apellidoUsuario'];
            $generoUsuario= $_POST['generoUsuario'];
            $emailUsuario= $_POST['emailUsuario'];
            $fechaUsuario= $_POST['fechaUsuario'];
            $numeroUsuario= $_POST['numeroUsuario'];
            $contraseniaUsuario= $_POST['contraseniaUsuario'];
            $contraseniaRepetidaUsuario= $_POST['contraseniaRepetidaUsuario'];
            $passEnc= md5($contraseniaUsuario);
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
            /*
VALUES (
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
            */
        if($conn->query($sql) == TRUE)
            debug_to_console("OK");
        else
            debug_to_console("Error: ".$sql."<br>" . $conn->error);
        mysqli_close($conn);
    }else{
        echo'<script type="text/javascript">
            alert("No hay nada");
            window.location.href="index.php";
            </script>';
    }
=======
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
>>>>>>> b698b155705d4f25a3e08e6288f3c10c386e07a0
