
exports.hello = function (req, res) {
    res.send("hello world!");
};

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send("hola mundo desde routes");
});

module.exports = router;