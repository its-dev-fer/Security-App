var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  //crear la bd
  con.query("CREATE DATABASE minervasystem", function (err, result) {
    if (err) throw err;
    console.log("Base de datos creada");
  });

  //seleccionarla
  con.query("use minervasystem", function (err, result) {
    if (err) throw err;
    console.log("seleccionada");
  });

  //crear la tabla
  var sql = "CREATE TABLE usuarios(idUser int NOT NULL PRIMARY KEY AUTO_INCREMENT,name VARCHAR(255), email VARCHAR(255), telefono VARCHAR(50), contrasenia VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

});

