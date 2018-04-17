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

        $emailUsuario = $_POST['email'];

        $sql = "UPDATE usuarios SET Borrado = '0' WHERE Correo_electronico = '$emailUsuario'";

        if($conn->query($sql) == TRUE){
            //echo $conn."<br>";
            mysqli_close($conn);
            echo "<script>";
            echo "alert('Se ha eliminado su cuenta...');";
            echo "window.location = '../index.html#inicio';";
            echo "</script>";
            //header("location: ../index.html#tarjeta-login");
            exit();        
        }else{
            mysqli_close($conn);
            echo "<script>";
            echo "alert('No se puede eliminar su cuenta por el momento...');";
            echo "window.location = '../index.html#pantallaPrincipal';";
            echo "</script>";
            exit();
        }