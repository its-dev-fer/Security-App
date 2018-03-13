$(document).ready(function(){
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
    location.href = "#registro_servidoresp";
    
  });

  $("#ciudadano").click(function(e){
    e.preventDefault();
    location.href = "#registro_normal";
    
  });

});
