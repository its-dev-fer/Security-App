

$(document).ready(function(){
	//gelocation aki pq soy mui cul
	var kmaras = {
		kmara1:{
			center:{lat:16.7751810, lng: -93.0799510}
		},

		kmara2:{
			center:{lat:16.7759637, lng: -93.0808115}
		}


	}
	
	var distance;

	function GoogleMap(position) {	
	  var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  console.log(location);
	  console.log("latitud:" + position.coords.latitude+ " longitud:" + position.coords.longitude);
	  var map = new google.maps.Map(document.getElementById('map-canvas'), {
	    zoom: 20,
	    disableDefaultUI: false,
	    mapTypeId: "hybrid"//google.maps.MapTypeId.ROADMAP
	  });



	  var image = 'img/kmera.png';

	  var marker = new google.maps.Marker({
	    map: map,
	    position: location,
	    animation: google.maps.Animation.DROP,
	    title: "Usted se encuentra aquí",
	    draggable:true,	    	    
	  });

	  //google.maps.event.addListener(marker, 'position_changed', update);

	  map.setCenter(location);
	  var i=0;
	  for(var kamara in kmaras){
	  	
	  	var camaras = new google.maps.Circle({
            strokeColor: '#000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#00ff00',
            fillOpacity: 0.35,
            map: map,
            icon:image,
            center: kmaras[kamara].center,
            radius: 25
          });
	  		
	  	 var markers = new google.maps.Marker({
		    map: map,
		    position: kmaras[kamara].center,		    		  
		    draggable:false,	    	   
		    icon:image
	     });

	  	 var path = [markers.getPosition(), marker.getPosition()];
	  	 distance = google.maps.geometry.spherical.computeHeading(path[0], path[1]);
	  	 if(distance<50){
	  	 	console.log("ESTAS CERCA DE UNA KMARA");
	  	 }
	  	 console.log("Distancia camara["+ i +"]: "+ distance);
	  	 i++;
//	  	 update();
	  }

//	  function update(){

//	  }

	  var circle = new google.maps.Circle({
		    center: location,
		    radius: 20,
			map: map,
			fillColor: '#ff6666',
			fillOpacity: 0.8,
			strokeColor: '#000',
			strokeOpacity: 1.0
	   });
	   
	   circle.bindTo('center', marker, 'position');
	   

	}

	function showError() {
	  alert("No te pudimos encontrar:(");
	}

   $(document).on( "pageinit", "#mapaVista", function(e) {
   		e.preventDefault();
   		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(GoogleMap, showError);		 
		} else {
		  alert("Tu Dispositivo no te viene manejando la geolocalización.");
		}
	});

	//fin geolocation
	$("#form-registro-usuario").on('submit',function(e){
		e.preventDefault();
		$p1 = $("#contraseniaUsuario").val();
		$p2 = $("#contraseniaRepetidaUsuario").val();
		if($p1 == $p2){
			$form = $( this ),
          	$url = $form.attr( 'action' );
          	console.log($url);
          	$.post("../php/registrarUsuario.php", $("#form-registro-usuario").serialize());
          	location.href = "#pantallaPrincipal"; 
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
	$("#registro").on("swiperight", regresarACasa);
	$("#tarjeta-login").on("swiperight", regresarACasa);

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