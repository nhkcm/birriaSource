var mysql_cnn = require('mysql');
var connection = mysql_cnn.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'joselirio2',
    database: 'db_birria'
});

exports.cnn = connection;