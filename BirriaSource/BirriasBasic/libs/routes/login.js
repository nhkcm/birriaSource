var clientes = require('../tables/cliente');
var validator = require('../validate/val_login');

exports.hello = function (req, res) {
    res.send("hello world!");
};

var express = require('express');
var router = express.Router();

router.get('/all', function (req, res) {
    clientes.list(function (rows) {
        res.send(JSON.stringify(rows));
    });    
});
//////////////////////////////////////////////
//>                info
//////////////////////////////////////////////
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
router.get('/info', function (req, res) {
    res.send(JSON.stringify({
        "user":
        [
            "correo",
            "password",
        ]
    }));
});
//////////////////////////////////////////////
//>                rest
//////////////////////////////////////////////
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
router.post('/', function (req, res) {
    
    var user = req.body.user;
    console.log(user);
    validator.validate_store_user(user, function (err, store_user) {
        //>retorna el error si sale con error.
        if (err) { r.send(err); return; }
        //>retorna el store_user
        delete (store_user.password);
        res.send(JSON.stringify(store_user));
    });
});
router.post('/photo', function (req, res) 
    
    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }

    res.send("nothing");
});
router.post('/validate', function (req, res) {
    var token = req.body.token;    
    validator.validate_token(token, function (info) {
        res.send(info);
    });
});

module.exports = router;