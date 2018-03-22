$(document).ready(function(){

	//Validar que el usario esté conectado a internet
	if(!navigator.onLine){
	  	alert('Necesitamos conexión a Internet para ofrecerte nuestro servicio :c');
  		navigator.app.exitApp();
 	}

	//Checar si es la primera vez que se abre la app
	var primeraVez = localStorage.getItem('primeraVez',null);
	if(!primeraVez){
		//localStorage.setItem('primeraVez',1);
		location.href = "#tarjeta-1"
	}else{
		location.href = "#inicio";
	}


	$("#btn-1").click(function(e){
		e.preventDefault();
		location.href = "#tarjeta-2";
	});

	$("#btn-2").click(function(e){
		e.preventDefault();
		location.href = "#tarjeta-3";
	});

	$("#btn-3").click(function(e){
		e.preventDefault();
		location.href = "#tarjeta-4";
	});

	$("#btn-4").click(function(e){
		e.preventDefault();
		location.href = "#tarjeta-5";
	});
	/* ======================================================= */

	//Asignar un ID a cada botón de las tarjetas de presentación
	$("#btn-tarjeta-1").click(function(e){
		e.preventDefault();
		location.href =  "#tarjeta-2";
	});

	$("#btn-tarjeta-2").click(function(e){
		e.preventDefault();
		location.href =  "#tarjeta-2";
	});

	$("#btn-tarjeta-3").click(function(e){
		e.preventDefault();
		location.href =  "#tarjeta-3";
	});

	$("#btn-tarjeta-4").click(function(e){
		e.preventDefault();
		location.href =  "#tarjeta-4";
	});

	$("#btn-tarjeta-5").click(function(e){
		e.preventDefault();
		location.href =  "#tarjeta-5";
	});

	/* ======================================================= */
	$("#goHome").click(function(e){
		e.preventDefault();
		location.href = "#inicio";
		$("#goHome").attr('data-transition','flip');
		localStorage.setItem('primeraVez',1);
	});

	$("#signup").click(function(e){
		e.preventDefault();
		location.href = "#tipoDeUsuario";
	});

	$("#btn_configuracion").click(function(e){
		e.preventDefault();
		location.href = "#ventana_configuracion";
	});

	$("#login").click(function(e){
		e.preventDefault();
		location.href = "#tarjeta-login";
	});

	$("#seguridad_publica").click(function(e){
		e.preventDefault();
		location.href = "#verificacionDeUsuario";
	});

	$("#ciudadano").click(function(e){
		e.preventDefault();
		location.href = "#registro";
	});
	/*
	$("#button-registrarUsuario").click(function(e){
		e.preventDefault();
		var contraseniaUsuario= document.getElementById("contraseniaUsuario").value;
		var contraseniaRepetidaUsuario= document.getElementById("contraseniaRepetidaUsuario").value;
		if(contraseniaUsuario == contraseniaRepetidaUsuario){
			location.href= "#pantallaPrincipal"
		}else
			alert("Verifique que las contraseñas sean iguales");
	});*/

	$("#boton-Logo-Rojo").click(function(e){
		e.preventDefault();
		alert("Alerta Enviada");
  	});

  	$("#boton_acerca_de").click(function(e){
  		e.preventDefault();
  		location.href = ("#ventana_acerca_de")
  	})

	//Gesto de deslizar hacia la derecha
	$("#tipoDeUsuario").on("swiperight", regresarACasa);
	$("#verificacionDeUsuario").on("swiperight", regresarACasa);

	$("#historial").on("swiperight",function(e){
		e.preventDefault();
		if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
	        if ( e.type === "swiperight"  ) {
	            $( "#menu-panel" ).panel( "open" );
	        }
	    }
	});

	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var content = this.nextElementSibling;
	    if (content.style.maxHeight){
	      content.style.maxHeight = null;
	    } else {
	      content.style.maxHeight = content.scrollHeight + "px";
	    } 
	  });
	}

});

function regresarACasa(event){
	location.href = "#inicio";
}