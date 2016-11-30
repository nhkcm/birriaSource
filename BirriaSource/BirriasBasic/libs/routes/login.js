var clientes = require('../tables/cliente');
var validator = require('../validate/val_login');

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

router.post('/register', function (req, res) {
    var data = req.body.new_user;
    validator.validate_user_register(data, function () {
        clientes.add(req.body.new_user, function (err, row, fields) {
            if (err) {
                res.send("ocurrio un erro durante el proceso de registro." + err);
                return;
            }

            if (row.affectedRows == 1) {
                res.send("registro realizado exitosamente.");
            } else {
                res.send("ningun registro afectado");
            }
        });
    }, function (err) {
        res.send("tenemos un problema: " + err);
    });
});
router.get('/register/info', function (req, res) {
    res.send(JSON.stringify({
        "new_user":
        [
            "correo",
            "password",
            "nombre",
            "apellido",
            "telefono",
        ]
    }));
});

router.get('/hello', function (req, res) {
    clientes.exist_user("user1", function (r) {
        res.send(JSON.stringify(r));
    });
});

module.exports = router;