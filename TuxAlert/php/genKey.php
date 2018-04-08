<?php
function salir(){
    header("location: ../index.html/#sp_genKey");
}
  try{
    $conn = new PDO('mysql:host=localhost;dbname=tuxalert_app_db', 'root', '');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
		$numerodeletras = 10;
		$cadena = "";
		for($i = 0; $i < $numerodeletras; $i++){
			$cadena .= substr($caracteres,rand(0, strlen($caracteres)), 1);
		}

    $estado = 1;

    $stmt = $conn->prepare("INSERT INTO `tuxalert_app_db`.`usuarios` (`id_key`,`key`,`estado`) VALUES (NULL, ?,?)");
    $stmt->bindParam(1, $cadena);
    $stmt->bindParam(2, $estado);
    $stmt->execute();
    salir();
  }catch(PDOException $e){
    echo "ERROR: " . $e->getMessage();
  }
?>
