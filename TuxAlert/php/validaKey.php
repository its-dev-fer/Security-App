
<?php
      $claveIngresada = $_POST['claveUsuario'];
      $existeClave = false;

      $con = new PDO('mysql:host=localhost;dbname=tuxalert_app_db', 'root',"", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
      $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $stmt = $con->prepare('SELECT * FROM `keys`');
      $stmt->execute();

      while ($datos = $stmt->fetch()) {
        if($claveIngresada == $datos[1] && $datos[2] == 1){
          $existeClave = true;
        }
      }

      if($existeClave == true){
        try{
            $stmt = $con->prepare('UPDATE `keys` SET `estado`=0 WHERE `clave`= "'.$claveIngresada.'"');
            $stmt->execute();
            //header("location: ../index.html#registrosp");
            echo "<script>";
            echo "window.location = '../index.html#verificacionDeUsuario';";
            echo "</script>";
            exit();
        } catch (PDOException $e) {
          echo 'Error: '. $e->getMessage();
        }
      }else{
        echo "<script>";
        echo "alert('La clave ingresada no es válida.');";
        echo "window.location = '../index.html#verificacionDeUsuario';";
        echo "</script>";
        exit();
      }

      $con = null;
 ?>
