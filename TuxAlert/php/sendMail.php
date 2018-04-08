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

		$mail->AddAddress("tuxalertcontacto@gmail.com",'');
		$mail->SMTPAuth = true;

		$mail->Username = "tuxalertcontacto@gmail.com";
		$mail->Password = "contacto123";
		if($mail->Send())
		{
			return header("Location: #page_contact");
		}else
		{
			return false;
			die();
		}
	}
$html = sendDos($_POST['asunto'],$_POST['mensaje']);
?>