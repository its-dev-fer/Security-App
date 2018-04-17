<?php
ini_set('display_errors',1);
require("PHPMailer/class.phpmailer.php");
require("PHPMailer/class.smtp.php");

	function sendDos($asunto, $mensaje)
	{
	$mail = new PHPMailer() ;

	$body = '<p> ¡Nueva queja! </p> <br>
					<p> Asunto: '. $asunto.'</p> <br>
					<p> Mensaje: '. $mensaje.'</p> <br>';

		$body .= "";

		$mail->IsSMTP();

 		$mail->Host = "smtp.gmail.com";
		$mail->Port       = 465;
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = "ssl";
		$mail->SMTPDebug = 1;

		$mail->From     = "tuxalertcontacto@gmail.com";
		$mail->FromName = "TuxAlert";
		$mail->Subject  = "Nuevo correo de contacto: ".$asunto;
		$mail->AltBody  = "Leer";
		$mail->MsgHTML($body);

		$mail->AddAddress("163202@ids.upchiapas.edu.mx",'');
		$mail->SMTPAuth = true;

		$mail->Username = "163202@ids.upchiapas.edu.mx";
		$mail->Password = "pesddya97";
		if($mail->Send())
		{
			$mail->ClearAllRecipients();
			echo "<script>";
            echo "alert('El mensaje se ha enviado satisfactoriamente...');";
            echo "window.location = '../index.html#page_contact';";
            echo "</script>";
			//return header("Location: #page_contact");
			exit();
		}else
		{
			echo "<script>";
            echo "alert('El mensaje no se pudo enviar...');";
            echo "window.location = '../index.html#page_contact';";
            echo "</script>";
			//return false;
			die();
		}
	}
$html = sendDos($_POST['asunto'],$_POST['mensaje']);
?>