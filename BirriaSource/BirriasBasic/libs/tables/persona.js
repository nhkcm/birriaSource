var cnn = require('../database/conexion.js').cnn;
var base = require('./base');

exports.add = function (row, callback) {
    base.add("persona", row, callback);
};