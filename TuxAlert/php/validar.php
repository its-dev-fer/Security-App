<?php
/*Validar que los datos sean correctos*/
session_start();
$servername = "localhost";
	$username = "root";
	$passwordBD = "";
	$dbname = "tuxalert_app_db";

	$usuario = $_POST['login_username'];
	$password = $_POST['login_password'];
	$md5ps = md5($password);
	// Create connection
	$conn = new mysqli($servername, $username, $passwordBD, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "SELECT * FROM usuarios WHERE Nombre = '$usuario' AND Contrasenia = '$md5ps'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
		//ID_TipoUsuario
		switch ($row['ID_TipoUsuario']) {
			case 1:
					header("location: http://127.0.0.1/index.html#pantallaPrincipal");		
				break;
			case 2: 
					header("location: http://127.0.0.1/index.html#pantallaPrincipalSP");
				break;
			default:
					header("location: http://www.google.com.mx");
				break;
		}
		//header("location: http://127.0.0.1/index.html#pantallaPrincipal");
	}else{
		header("location: http://127.0.0.1/index.html#");
	}
	$conn->close();
	//header("Location: http://127.0.0.1/index.html#pantallaPrincipal");
	exit();