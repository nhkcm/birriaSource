exports.table_name = "";

exports.initialize = function (table_name) {
    exports.table_name = table_name;
};

exports.buildInsertSql = function (row, callback_ready) {
    var fields = [];
    var values = [];
    if (exports.table_name === "") {
        return null;
    }

    for (var i in row) {
        fields.push(i);
        values.push("'" + row[i] + "'");
    }

    var sql = "insert into " + exports.table_name + " ( " + fields.join(',') + " ) values (" + values.join(',') + ")";
    callback_ready(sql);
}