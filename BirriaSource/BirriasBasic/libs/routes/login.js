var clientes = require('../tables/cliente');

exports.hello = function (req, res) {
    res.send("hello world!");
};

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    clientes.list(function (rows) {
        res.send(JSON.stringify(rows));
    });
    //res.send("hola mundo desde routes");
});

module.exports = router;