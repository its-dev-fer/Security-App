var lastLat = "1";
var lastLongi = "2";
var aipe ="3";
var textoip=null;

$(document).ready(function(){

	$("#eliminar-cuenta").on('click',function(e){
		e.preventDefault();
		var result = confirm("*** Atención ***\n¿Está seguro de eliminar su cuenta?\nNo la podrá recuperar después.");
		if(result == true){
			var _email = localStorage.getItem('email',"");
			$.ajax({
				type: "POST",
				data: {
					email: _email
				},
				url: "../php/delete.php",
				success: function(){
					alert("Su cuenta se ha eliminado de nuestros sistemas.");
					localStorage.removeItem('userMode');
					localStorage.removeItem('append');
					localStorage.removeItem('email');
					location.href = "#inicio";
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert("No se pudo enviar :''v " + XMLHttpRequest + " " + textStatus + " " + errorThrown);
				}
			});
		}else{
			alert("Operación cancelada.");
		}
	});

	$(function () {
		$("#nav-panel").panel().enhanceWithin();
		$("#nav-panelSP").panel().enhanceWithin();
		$("[data-role=header], [data-role=footer]").toolbar().enhanceWithin();
	});

	$("#txt-cerrar-sesion").click(function(e){
		e.preventDefault();
		localStorage.removeItem('userMode');
		localStorage.removeItem('append');
		localStorage.removeItem('email');
		location.href = "#inicio";
	});

	$(document).on('pageinit','#update-Data',function(e){
		e.preventDefault();
		var current_email = localStorage.getItem('email',"");
		$("#current-email").val(current_email);
	});

	$("#cambiar-informacion").click(function(e){
		e.preventDefault();
		location.href = "#update-Data";
	});

	$tipoUsuario = localStorage.getItem("userMode",null);
	switch($tipoUsuario){
		case '1':{//Página inicial para ciudadanos
			location.href = "#pantallaPrincipal";
			break;
		}
		case '2':{//Página inicial para agentes de seguridad
			location.href = "#pantallaPrincipalSP";
			break;
		}
	}

	//recuperar el correo electrónico del usuario
	$("#form-login").on("submit",function(){
		$lastEmail = $("#usr-email").val();
		localStorage.setItem("email",$lastEmail);
	});

	 $(document).on( "pageinit", "#pantallaPrincipal", function(e) {
	 	var options = { enableHighAccuracy: true, maximumAge: 100, timeout: 50000 };
		e.preventDefault();

		
		
		localStorage.setItem("userMode",1);

		/*	Solicitar la ubicación	*/
		if (navigator.geolocation) {
		//GoogleMaps para activar el mapa y las cámaras
		navigator.geolocation.getCurrentPosition(GoogleMap, displayError);
		  var timeoutVal = 10 * 1000 * 1000;
		  navigator.geolocation.getCurrentPosition(
		    displayPosition, 
		    displayError,
		    { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
		  );
		}
		else {
		  alert("No soportas la función GPS");
		}
	});

	$(document).on("pageinit","#pantallaPrincipalSP",function(e){

		e.preventDefault();

		//Recuperar el correo del usuario logueado
		var rawfile = new XMLHttpRequest();
		rawfile.open("GET","../php/user_info.txt",false);
		rawfile.onreadystatechange = function(){
			if(rawfile.readtState === 4){
				if(rawfile.status === 200 || rawfile.status == 0){
					var testo = rawfile.responseText;
					localStorage.setItem("email",testo);
				}
			}
		}		

		rawfile.send(null);

	});

	function displayPosition(position) {
  		lastLat = position.coords.latitude;
  		lastLongi = position.coords.longitude;
	}

	function displayError(error) {
	  var errors = { 
	    1: 'Permission denied',
	    2: 'Position unavailable',
	    3: 'Request timeout'
	  };
	  alert("Error: " + errors[error.code]);
	}

	 $(document).on( "pageinit", "#pantallaPrincipalSP", function(e) {
   		e.preventDefault();
   		localStorage.setItem("userMode",2);
	});

	//gelocation aki pq soy mui cul

	var CamOrStream = false;

	var kmaras = {
		kmara1:{
			center:{lat: 16.6155879, lng: -93.0905934},
			alerta: false,
			ip: "192.169.1.0"
		},

		kmara2:{
			center:{lat:16.6152431, lng: -93.0897087},
			alerta: false,
			ip: "192.169.1.0"
		},

		kmara3:{
			center:{lat:16.6155873, lng:-93.0884087},
			alerta: false,
			ip: "192.169.1.0"
		},

		kmara4:{
			center:{lat:16.6275549,lng:-93.0980324},
			alerta: false,
			ip: "192.169.1.0"
		},

		kmara5:{
			center:{lat:16.627588,lng:-93.0971251},
			alerta: false,
			ip: "192.169.1.0"
		},
		kmara6:{
			center:{lat:16.6276658,lng:-93.0973038},
			alerta: false,
			ip: "192.169.1.0"
		},
		kamara7:{
			center:{lat:16.6246559, lng:-93.09269959999999},
			alerta:false,
			ip: "cientonovientaydosekisdé"
		},
		kamara8:{
			center:{lat:16.6239199, lng:-93.0926997},
			alerta:false,
			ip:"192.168.0.22:8888"
		}

	}

	var distance;
	var ipkam,id,ipe;

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

	  	 var path = [markers.getPosition(), marker.getPosition()];	  	 
	  	 distance = Math.ceil(google.maps.geometry.spherical.computeDistanceBetween(path[0], path[1]));	  
	  	 if(distance<200 ){
	  	 	console.log("ESTAS CERCA DE UNA KMARA");
	  	 	kmaras[kamara].alerta = true;
	  	 	id=i;
	  	 }
	  	 console.log("Distancia camara["+ i +"]: "+ distance);
	  	 i++;
	}

	var cont=0;
	for(var kamara in kmaras){
		if(kmaras[kamara].alerta==true && cont==0){
			cont++;
			ipkam = kmaras[kamara].ip;
			console.log("ip> "+ kmaras[kamara].ip);
			console.log()
			CamOrStream = true;
		}
	}
	UpdateRecord(id,ipkam);
	if(CamOrStream){
		aipi = ipkam;
	}else{
		aipi = "127.0.0.1";
		/*$.getJSON("https://api.ipify.org/?format=json", function(e) {    
    		aipi = e.ip;
		});*/
	}
}

	//Very important function
	$("#btn-alarma").click(function(){
		$.ajax({
		  type: "POST",
		  data: {
		  	latitud: lastLat,
		  	longitud: lastLongi,
		  	aipi: aipi
		  },
		  url: "../php/alarma.php",
		  success: function(){
			  alert("La alarma se ha enviado correctamente.");
			  //registrar en el historial
			  $divHistorial = $("#hereComesTheSunTururu");
			  var fecha = new Date().toJSON().slice(0,10).replace(/-/g,'/');
			  alert(fecha);
			  var previousData = localStorage.getItem("append","");
			  var newData = previousData + "<tr><td><li class='historial-item'>Emergencia</li></td>" + "<td><li class='historial-item'>" + fecha + "</li></td></tr>";
			  localStorage.setItem("append",newData);
		  },
		  error: function(XMLHttpRequest, textStatus, errorThrown) {
     			alert("No se pudo enviar :''v " + XMLHttpRequest + " " + textStatus + " " + errorThrown);
  			}
		});
	});

	function getLat(){
		return localStorage.getItem('latitud','0');
	}

	function getLong(){
		return localStorage.getItem('longitud','0');
	}


	function UpdateRecord(id,ipkam){
	  console.log("func>" + id+" - " + ipkam);
      $.ajax({
       type: "POST",
       data: {id:id,ipkam:ipkam},   // <-- put on top
       url: "../php/kmaras.php",
       cache: false,
       success: function(response)
       {
         //alert("Record successfully updated...");
       }
     });
	}


	var rawfile=null;

	

	$(document).on("pageinit","#historial",function(e){
		e.preventDefault();
		var data = localStorage.getItem("append","");
		$("#hereComesTheSunTururu").append(data);
	});


	$(document).on( "pageinit", "#streaming-card", function(e) {
		console.log("1");
		rawfile = new XMLHttpRequest();
		rawfile.open("GET","../php/error_og.txt",false);
		rawfile.onreadystatechange = function(){
			console.log("2");
			if(rawfile.readyState  === 4){
				console.log("3");
				if(rawfile.status === 200 || rawfile.status == 0){
					textoip = rawfile.responseText;
					console.log("> "+ textoip);
					localStorage.setItem("ip", textoip);
				}
			}
		}		

		rawfile.send(null);//ams

	});

	$(document).on("pageinit","#pantallaPrincipalSP", function(e){

		

		console.log("rezive> "+  localStorage.getItem("ip"));
		$("#IDBERGAS").attr("src", localStorage.getItem("ip"));
	});

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

});

function regresarACasa(event){
	location.href = "#inicio";
}


function getCookieValue(a) {
    return (name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1];
}

function success__MAP(pos) {
  var crd = pos.coords;
  alert(crd.latitude + ", "  + crd.longitude);
};

function success__MAP_RETURN_LAT(pos){
	var crd = pos.coords;
	return crd.latitude;
}

function success__MAP_RETURN_LONGITUD(pos){
	var crd = pos.coords;
	return crd.longitude;
}

function error__MAP(err){
  alert(err);
};