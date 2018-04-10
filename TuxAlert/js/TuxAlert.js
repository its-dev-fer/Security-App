$(document).ready(function(){	
	//gelocation aki pq soy mui cul
	var kmaras = {
		kmara1:{
			center:{lat: 16.6155879, lng: -93.0905934},
			alerta: false
		},

		kmara2:{
			center:{lat:16.6152431, lng: -93.0897087},
			alerta: false
		},

		kmara3:{
			center:{lat:16.6155873, lng:-93.0884087},
			alerta: false
		},

		kmara4:{
			center:{lat:16.6275549,lng:-93.0980324},
			alerta: false
		},

		kmara5:{
			center:{lat:16.627588,lng:-93.0971251},
			alerta: false
		},
		kmara6:{
			center:{lat:16.6276658,lng:-93.0973038},
			alerta: false
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

	  var circle = new google.maps.Circle({
		    center: location,
		    radius: 10,
			map: map,
			fillColor: '#ff6666',
			fillOpacity: 0.8,
			strokeColor: '#000',
			strokeOpacity: 1.0
	   });
	   circle.bindTo('center', marker, 'position');  

	  map.setCenter(location);
	  var i=1;
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
            radius: 15
          });

	  	 var markers = new google.maps.Marker({
		    map: map,
		    position: kmaras[kamara].center,
		    draggable:false,
		    icon:image
	     });

	  	 //manera 1212312
	  	 


	  	 ///

	  	 var path = [markers.getPosition(), marker.getPosition()];	  	 
	  	 distance = Math.ceil(google.maps.geometry.spherical.computeDistanceBetween(path[0], path[1]));	  
	  	 if(distance<40 ){
	  	 	console.log("ESTAS CERCA DE UNA KMARA");
	  	 	kmaras[kamara].alerta = true;
	  	 }
	  	 console.log("Distancia camara["+ i +"]: "+ distance);
	  	 i++;
	  }

	
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
	//Validar que el usario esté conectado a internet
	if(!navigator.onLine){
	  	alert('Necesitamos conexión a Internet para ofrecerte nuestro servicio :c');
  		//navigator.app.exitApp();
 	}

	//Checar si es la primera vez que se abre la app
	/*
	var primeraVez = localStorage.getItem('primeraVez',null);
	var _tipoDeUsuario = localStorage.getItem("tipoUsuario",null);
	if(!primeraVez){
		//:v
	}else{
		if(_tipoDeUsuario == "NORMIE"){
			location.href = "#pantallaPrincipal";
		}else{
			location.href = "#pantallaPrincipalSP";
		}
	}
	*/

	//Guardar datos del usuario al registrarse
	$("form-registro-usuariosp").on('submit',function(){
		//localStorage.setItem('primeraVez',1);
		$usrnme = $("#usrnmeSP").val();
		//localStorage.setItem('usuario', $usrnme);
		//localStorage.setItem('tipoUsuario', "SP");
		location.href = "index.html#pantallaPrincipalSP";
	});

	$("#form-registro-usuario").on('submit',function(){
		//localStorage.setItem('primeraVez',1);
		$usrnme = $("#usrnme").val();
		//localStorage.setItem('usuario', $usrnme);
		//localStorage.setItem('tipoUsuario', "NORMIE");
		location.href = "index.html#pantallaPrincipal";
	});

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



	//Actualizar las alarmas al abrir la pantalla principal de seguridad publica
	$(document).on( "pageinit", "#pantallaPrincipalSP", function(e) {
   		e.preventDefault();
   		//Actualizar alertas
	});

});

function regresarACasa(event){
	location.href = "#inicio";
}


function getCookieValue(a) {
    return (name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1];
}