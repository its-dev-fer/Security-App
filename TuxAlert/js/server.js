const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const site = "www.google.com.mx";
var express = require('express'),
app = express(); 
app.use('/', express.static(__dirname + '/../index.html'));
app.listen(8080);