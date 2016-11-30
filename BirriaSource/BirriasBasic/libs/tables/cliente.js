var cnn = require('../database/conexion.js').cnn;
var base = require('./base');

//>all
var query1 = 'SELECT * FROM db_birria.clientes;';

exports.list = function (callback) {
    var swi = new Date().getTime();
    cnn.query(query1, function (err, rows, fields) {
        //parsear antes de mandar;
        var swf = new Date().getTime();
        console.log(swf - swi);
        callback(rows);
    });
}