
var express = require('express');
var login = require('./libs/routes/login');
var http = require('http');
var port = 1337;

app = new express();

app.listen(port, function (err) {
    console.log("escuchando desde el puerto");
});

app.get('/', function (r,s) {
    s.sendFile(__dirname + "/public/index.html");
});

app.use('/login', login);
//app.get('/', function (q, s) {
//    s.sendFile(__dirname + "/public/index.html");
//});

//app.get('/', login.hello);
//app.get('/download', function (req, res) {
//    res.download(__dirname + "/public/hola_mundo_file.txt");
//});