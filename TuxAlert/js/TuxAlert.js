$(document).ready(function(){
<<<<<<< HEAD

	//Checar si es la primera vez que se abre la app
	var primeraVez = localstorage.get('primeraVez');
	if(primeraVez==null){
		localstorage.set('primeraVez',1);
		location.href = "#tarjeta-1";
	}else{
		location.href = "#inicio";
	}
=======
	
	location.href = "#inicio";
>>>>>>> 6ea3b6082271b081ff83a8e0a13a8574ef18b143

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
    location.href = "#verificacionDeUsuario";
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
