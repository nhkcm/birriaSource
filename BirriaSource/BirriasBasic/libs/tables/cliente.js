var cnn = require('../database/conexion.js').cnn;
var base = require('./base');

//>all
var queryAll = 'SELECT * FROM db_birria.clientes;';
var existUserName = "SELECT count(*) as contador FROM db_birria.clientes where user = '@username'";

exports.list = function (callback) {
    var swi = new Date().getTime();
    cnn.query(query1, function (err, rows, fields) {
        //parsear antes de mandar;
        var swf = new Date().getTime();
        console.log(swf - swi);
        callback(rows);
    });
}

exports.add = function (row, callback) {
    base.add("clientes", row, callback);
};

exports.exist_user = function (user_name, callback) {
    var sql = existUserName.replace('@username', user_name);
    console.log("sentencia:" + sql);
    cnn.query(sql, function (err, rows, fields) {
        callback(rows[0].contador == 1);
    });    
};