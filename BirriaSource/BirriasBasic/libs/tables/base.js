var cnn = require('../database/conexion.js').cnn;
exports.table_name = "";
var InsertSql = "";
var UpdateSql = "";
var SelectSql = "";
var DeleteSql = "";
exports.isInitialize = false;

function _initialize(table_name, key_names,callback) {
    exports.table_name = table_name;
    //>build Insert Sql
    var fields = [];
    var values = [];
    if (exports.table_name === "") {
        return null;
    }

    for (var i in row) {
        fields.push(i);
        values.push("'" + row[i] + "'");
    }

    InsertSql = "insert into " + exports.table_name + " ( @fields ) values ( @values )";
    UpdateSql = "update " + exports.table_name + " set @key_value where @pks";
    DeleteSql = "delete from " + exports.table_name + " where @pks ";
    //>build Update Sql
    _isInitialize = true;
    callback();
};

function _add(table_name, row, callback) {
    var fields = [];
    var values = [];
    for (var i in row) {
        fields.push(i);
        values.push("'" + row[i] + "'");
    }
    sql = "insert into " + table_name + " ( " + fields.join(',') + " ) values ( " + values.join(',') + " )";
    cnn.query(sql, function (err, row, fields) {        
        callback(err, row, fields);
    });
};



function _transaccion(row, callback) {
    var fields = [];
    var values = [];
    for (var i in row) {
        fields.push(i);
        values.push("'" + row[i] + "'");
    }
    sql = "insert into " + table_name + " ( " + fields.join(',') + " ) values ( " + values.join(',') + " )";    
};

exports.add = _add;