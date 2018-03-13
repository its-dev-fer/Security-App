//Ahora si viene lo chido :v
$(document).ready(function(){
	$("#goHome").click(function(e){
		e.preventDefault();
		location.href = "#inicio";
	});

	$("#signup").click(function(e){
		e.preventDefault();
		alert("*c registra*");
	});

	$("#login").click(function(e){
		e.preventDefault();
		alert("*c loguea*");
	});
});