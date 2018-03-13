$(document).ready(function(){
	//Checar si es la primera vez que se abre la app
	var primeraVez = localStorage.getItem('primeraVez',null);
	if(!primeraVez){
		localStorage.setItem('primeraVez',1);
	}else{
		location.href = "#inicio";
	}

	$("#goHome").click(function(e){
		e.preventDefault();
		location.href = "#inicio";
		$("#goHome").attr('data-transition','flip');
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
