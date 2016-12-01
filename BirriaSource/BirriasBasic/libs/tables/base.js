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
function _all(table_name, callback) {
    cnn.query("select * from " + table_name, function (err, rows, fields) {
        if (err) { callback([]); return }
        callback(rows);
    });
};
function _filter(table_name, clause, callback) {
    cnn.query("select * from " + table_name + " where " + clause, function (err, rows, fields) {
        if (err) { callback([]); return }
        callback(rows);
    });
};
function _delete(table_name, clause, callback) {
    cnn.query("delete from " + table_name + " where " + clause, function (err, rows, fields) {
        if (err) { callback([]); return }
        callback(rows);
    });
};
function _update(table_name, row, clause, callback) {
    var fields = [];
    var values = [];
    for (var i in row) { sets.push(i + " = " + "'" + row[i] + "'"); }
    cnn.query("update " + table_name + " set " + sets.join(',') + " where " + clause, function (err, rows, fields) {
        if (err) { callback([]); return }
        callback(rows);
    });
};

//>future.
function _transaccion(querys, callback) {
    //var fields = [];
    //var values = [];
    //for (var i in row) {
    //    fields.push(i);
    //    values.push("'" + row[i] + "'");
    //}
    //sql = "insert into " + table_name + " ( " + fields.join(',') + " ) values ( " + values.join(',') + " )";    
};

exports.add = _add;
exports.all = _all;