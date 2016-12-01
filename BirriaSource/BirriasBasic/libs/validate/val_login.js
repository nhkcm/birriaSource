var cnn = require('../database/conexion.js').cnn;
var auth = require('../util/Authentication');

function store_user(mail, password, call_ok) {
    var sql = "select * from clientes where correo = '" + mail + "' and password = '" + password + "'";
    cnn.query(sql, function (err, rows, fields) {
        if (err) {
            call_ok(err);
            return;
        }
        auth.generateToken(rows[0], function (token) {
            rows[0].token = token;
            call_ok(err,rows);
        });        
    });
};

exports.validate_user_register = function (data, call_ok, call_bad) {
    if (!data) {
        call_bad("formato invalido");
        return;
    }
    //otras validaciones
    call_ok();
};

exports.validate_store_user = function (data, callback) {
    if (!data) {
        call_bad("formato invalido");
        return;
    }
    store_user(data.correo, data.password, callback);      
};

exports.validate_token = function (token, callback) {
    auth.isValidToken(token, function (res) {
        callback(res);
    });
};