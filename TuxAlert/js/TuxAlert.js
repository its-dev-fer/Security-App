

$(document).ready(function(){

	//gelocation aki pq soy mui cul
		
   $(document).on( "pageinit", "#mapaVista", function(e) {
	   	e.preventDefault();
	//	   	alert("yipiyaiyo");
    var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);  // Default to Hollywood, CA when no geolocation support
    if ( navigator.geolocation ) {
        function success(pos) {
            // te encontramos prro, dibuja el puto mapa
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
			//alert("latitud:" + pos.coords.latitude+ " longitud: " + pos.coords.longitude);
        }
        function fail(error) {
            drawMap(defaultLatLng);  // onde bergastas, dibuja un mapa default			
			
        }
        // te busca prro, guarda en cashe 5min, intenta por 6 segundos
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // nel prro no te vengo manejando los mapas.
    }
    function drawMap(latlng) {
        var myOptions  = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        //dibuja sobre el pinshimaap
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "kp2!"
		});
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