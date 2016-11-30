
var express = require('express');
var bodyParser = require('body-parser')
var login = require('./libs/routes/login');
var http = require('http');
var port = 1337;
var base = require('./libs/tables/base');
var cors = require('cors');

app = new express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:8100'}));

app.listen(port, function (err) {
    console.log("escuchando desde el puerto");
});

app.get('/', function (r,s) {
    s.sendFile(__dirname + "/public/index.html");
});

app.use('/login', login);