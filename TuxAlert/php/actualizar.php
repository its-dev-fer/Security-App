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

        $nombreUsuario= $_POST['nuevo-nombre'];
        $apellidoUsuario= $_POST['nuevo-apellidos'];
        $numeroUsuario= $_POST['nuevo-numero'];
        $emailUsuario = $_POST['email'];

        $sql = "UPDATE usuarios SET Nombre = '$nombreUsuario',
            Apellidos = '$apellidoUsuario',
            Telefono = '$numeroUsuario' WHERE Correo_electronico = '$emailUsuario'";

        if($conn->query($sql) == TRUE){
            //echo $conn."<br>";
            mysqli_close($conn);
            echo "<script>";
            echo "alert('Se han modificado sus datos');";
            echo "window.location = '../index.html#pantallaPrincipal';";
            echo "</script>";
            //header("location: ../index.html#tarjeta-login");
            exit();        
        }else{
            mysqli_close($conn);
            echo "<script>";
            echo "alert('No se pueden actualizar sus datos por el momento...');";
            echo "window.location = '../index.html#registro';";
            echo "</script>";
            exit();
        }