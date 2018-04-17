<?php
/*
$serverName= "127.0.0.1";
$userName= "root";
$password= "";
$dbName= "tuxalert_app_db";
// Create Connection DB
$conn= new mysqli($serverName, $userName, $password, $dbName);
// Check connection
if($conn->connect_error)
  die("Conexión fallida con la BD: " .$conn->connect_error);

$caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
$numerodeletras = 10;
$cadena = "";
for($i = 0; $i < $numerodeletras; $i++){
  $cadena .= substr($caracteres,rand(0, strlen($caracteres)), 1);
}

$estado = 1;

$sql= "INSERT INTO keys (clave,estado) VALUES (
  '$cadena',
  '$estado'
)";

if($conn->query($sql) == TRUE){
  //echo $conn."<br>";
  mysqli_close($conn);
  echo "<script>";
  echo "alert('Se ha generado una nueva clave = '".$cadena."');";
  echo "window.location = '../index.html#pantallaPrincipalSP';";
  echo "</script>";
  //header("location: ../index.html#tarjeta-login?ok");
  exit();
}else{
  mysqli_close($conn);
  echo "<script>";
  echo "alert('No se ha podido generar una nueva clave.');";
  echo "window.location = '../index.html#pantallaPrincipalSP';";
  echo "</script>";
  exit();
}
*/

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

    $stmt = $conn->prepare("INSERT INTO `tuxalert_app_db`.`keys` (`clave`,`estado`) VALUES (?,?)");
    $stmt->bindParam(1, $cadena);
    $stmt->bindParam(2, $estado);
    $stmt->execute();
    echo "<script>";
    echo "alert('Clave generada = $cadena');";
    echo "window.location = '../index.html#registro';";
    echo "</script>";
    exit();
  }catch(PDOException $e){
    echo "ERROR: " . $e->getMessage();
  }
?>