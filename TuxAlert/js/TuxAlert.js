$(document).ready(function(){
	
	location.href = "#inicio";

	$("#goHome").click(function(e){
		e.preventDefault();
		location.href = "#inicio";
	});

	$("#signup").click(function(e){
		e.preventDefault();
		location.href = "#tipoDeUsuario";
	});

	$("#login").click(function(e){
		e.preventDefault();
		alert("Pantalla de Loguin de Usuario");
	});

  $("#seguridad_publica").click(function(e){
    e.preventDefault();
    alert("Verificación de Credenciales");
  });

  $("#ciudadano").click(function(e){
    e.preventDefault();
    location.href = "#registro";
	});

	$("#button-registrarUsuario").click(function(e){
    e.preventDefault();
    alert("Usuario registrado exitósamente");
  });

});
