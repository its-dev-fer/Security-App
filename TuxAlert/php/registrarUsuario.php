<?php

    function salir(){
        $url="http://127.0.0.1";
        $ch = curl_init();
        $a = curl_exec($ch); // $a will contain all headers
        $ch = curl_init();
        $url = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL); // This is what you need, it will return you the last effective URL
        exit(); //exit() ya es una función de php, oyeron >:v
    }

    function back(){
        echo "xd";
    }

    echo "Hola, te estamos registrando...";
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
                mysqli_close($conn);
                setcookie("MyCookie", "Soy una galletita :3");
                echo "<script type='text/javascript>'"."localStorage.setItem('primeraVez',1);"."</script>";
                salir();
            }
        }else{
            echo "<script type='text/javascript'>alert('Las contraseñas no coinciden, intente de nuevo.');</script>";
        }