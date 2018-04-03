

$(document).ready(function(){

	//gelocation aki pq soy mui cul
	var lon;
	var lat;
	function GoogleMap(position) {
	  var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  lon= position.coords.longitude;
	  lat = position.coords.latitude;
	  var map = new google.maps.Map(document.getElementById('map-canvas'), {
	    zoom: 20,
	    disableDefaultUI: false,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	  });

	  var marker = new google.maps.Marker({
	    map: map,
	    position: location,
	    animation: google.maps.Animation.DROP,
	    title: "This is your location"
	  });

	  map.setCenter(location);
	}

	function showError() {
	  alert("Location can't be found");
	}

   $(document).on( "pageinit", "#mapaVista", function(e) {
   		e.preventDefault();
   		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(GoogleMap, showError);
		} else {
		  alert("Your browser does not support Geolocation.");
		}
	});

	//fin geolocation
	$("#form-registro-usuario").on('submit',function(e){
		e.preventDefault();
		$p1 = $("#contraseniaUsuario").val();
		$p2 = $("#contraseniaRepetidaUsuario").val();
		if($p1 == $p2){
			$.ajax({
		        type: 'post',
		        url: '../php/registrarUsuario.php',
		        data: $('#form-registro-usuario').serialize(),
		        success: function () {
		         alert('Se ha registrado al usuario');
		         location.href = "#pantallaPrincipal";
		         //Guardar en local storage para el inicio de sesión rápido xd
		        }
		    });
		}else{
			alert("Las contraseñas no coinciden.");
			$("#contraseniaUsuario").val("");
			$("#contraseniaRepetidaUsuario").val("");
		}
	});

		//Validar que el usario esté conectado a internet
	if(!navigator.onLine){
	  	alert('Necesitamos conexión a Internet para ofrecerte nuestro servicio :c');
  		navigator.app.exitApp();
 	}

	//Checar si es la primera vez que se abre la app
	var primeraVez = localStorage.getItem('primeraVez',null);
	/*
	if(!primeraVez){
		//localStorage.setItem('primeraVez',1);
		location.href = "#tarjeta-1"
	}*/


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
	$("#boton-Logo-Rojo").click(function(e){
		e.preventDefault();
		alert("Alerta Enviada");
  	});

  	$("#boton_acerca_de").click(function(e){
  		e.preventDefault();
  		location.href = ("#ventana_acerca_de");
  	});



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