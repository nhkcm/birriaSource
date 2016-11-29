
var express = require('express');
var http = require('http');
var port = 1337;

app = new express();

app.listen(port, function (err) {
    console.log("escuchando desde el puerto");
});

app.get('/', function (q, s) {
    s.send("hello world!");
});