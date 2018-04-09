var express = require("express");
var app = new express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var log = require('log');
	log = new log('debug');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.get('/',function(req, res){
	res.redirect('stream.html');
});

io.on('connection',function(socket){
	socket.on('stream',function(image){
		socket.broadcast.emit('stream',image);
	});
});
http.listen(port, function(){
	log.info("Servidor escuchando a traves del puerto %s",port);
	log.info("%s",__dirname);
});