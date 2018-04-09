//weas del mapa y geolocation
alert("pofavo");
   $(document).on( "pageload", "#mapaVista", function() {
   	alert("yipiyaiyo");
    var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);  // Default to Hollywood, CA when no geolocation support
    if ( navigator.geolocation ) {
        function success(pos) {
            // te encontramos prro, dibuja el puto mapa
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
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
        var configureishons = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), configureishons);
        //dibuja sobre el pinshimaap
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "kp2!"
		});
       }
	});

