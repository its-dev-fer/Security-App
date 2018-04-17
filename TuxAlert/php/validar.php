<?php
/*Validar que los datos sean correctos*/
session_start();
$myfile = fopen("user_info.txt", "w") or die("Unable to open file!");
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

	fwrite($myfile, $usuario);
	fclose($myfile);

	$sql = "SELECT * FROM usuarios WHERE Correo_electronico = '$usuario' AND Contrasenia = '$md5ps'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while ($row = $result->fetch_assoc()) {
			$borrado = $row['Borrado'];
			if($borrado == 1){
				switch ($row['ID_TipoUsuario']) {
					case 1:{
						echo "<script>";
						echo "window.location = '../index.html#pantallaPrincipal';";
						echo "</script>";
						//header("location: ../index.html#pantallaPrincipal");	
						exit();	
						break;
					}
	
					case 2:{
						echo "<script>";
						echo "alert('Correo o contraseña incorrectos, verifique sus datos.');";
						echo "window.location = '../index.html#tarjeta-login';";
						echo "</script>";
						//header("location: ../index.html#pantallaPrincipalSP");
						exit();
						break;
					}
							
					default:{
						echo "<script>";
						echo "alert('Correo o contraseña incorrectos, verifique sus datos.');";
						echo "window.location = '../index.html#tarjeta-login';";
						echo "</script>";
						//header("location: ../index.html#tarjeta-login");
						exit();
						break;
					}
				}
			}else{
				echo "<script>";
				echo "alert('El usuario está eliminado de nuestros sistemas. Contacte con el administrador si usted no borró su cuenta.');";
				echo "window.location = '../index.html#tarjeta-login';";
				echo "</script>";
				//header("location: ../index.html#tarjeta-login");
				exit();
			}
		}
		//$row = mysqli_fetch_assoc($result);
		//ID_TipoUsuario
		//header("location: http://127.0.0.1/index.html#pantallaPrincipal");
	}else{
		echo "<script>";
		echo "alert('Correo o contraseña incorrectos, verifique sus datos.');";
		echo "window.location = '../index.html#tarjeta-login';";
		echo "</script>";
		$conn->close();
		exit();
	}	