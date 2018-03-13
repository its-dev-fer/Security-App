$(document).ready(function(){

	//Checar si es la primera vez que se abre la app
	var primeraVez = localstorage.get('primeraVez');
	if(primeraVez==null){
		localstorage.set('primeraVez',1);
		location.href = "#tarjeta-1";
	}else{
		location.href = "#inicio";
	}

	$("#goHome").click(function(e){
		e.preventDefault();
		location.href = "#inicio";
	});

	$("#signup").click(function(e){
		e.preventDefault();
		location.href = "#registro";
	});

	$("#login").click(function(e){
		e.preventDefault();
		alert("*c loguea*");
	});

  $("#seguridad_publica").click(function(e){
    e.preventDefault();
    alert("Click seguridad publica");
  });

  $("#ciudadano").click(function(e){
    e.preventDefault();
    alert("Click ciudadano");
  });

});
