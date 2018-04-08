<?php
  try{
    $nombreUsuario= $_POST['nombreUsuario'];
    $apellidoUsuario= $_POST['apellidoUsuario'];
    $generoUsuario= $_POST['generoUsuario'];
    $emailUsuario= $_POST['emailUsuario'];
    $fechaUsuario= $_POST['fechaUsuario'];
    $numeroUsuario= $_POST['numeroUsuario'];
    $contraseniaUsuario= $_POST['contraseniaUsuario'];
    $contraseniaRepetidaUsuario= $_POST['contraseniaRepetidaUsuario'];
    $passEnc= md5($contraseniaUsuario);
    $borrado = 0;
    $tipo = 1;

    $conn = new PDO('mysql:host=localhost;dbname=tuxalert_app_db', 'root', '');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("INSERT INTO `tuxalert_app_db`.`usuarios` (Nombre, Apellidos, Correo_electronico, Fecha_nacimiento, Telefono, Contrasenia, Genero, Borrado, ID_TipoUsuario) VALUES (NULL, ?,?,?,?,?,?,?,?)");

    $stmt->bindParam(1, $nombreUsuario);
    $stmt->bindParam(2, $apellidoUsuario);
    $stmt->bindParam(3, $emailUsuario);
    $stmt->bindParam(4, $fechaUsuario);
    $stmt->bindParam(5, $numeroUsuario);
    $stmt->bindParam(6, $passEnc);
    $stmt->bindParam(7, $generoUsuario);
    $stmt->bindParam(8, $numeroUsuario);
    $stmt->bindParam(9, $tipo);
    $stmt->execute();
  }catch(PDOException $e){
    echo "ERROR: " . $e->getMessage();
  }
 ?>
