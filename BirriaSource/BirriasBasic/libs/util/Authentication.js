var CryptoJS = require("crypto-js");

exports.generateToken = function (user,callback) {
    // Encrypt 
    var ciphertext = CryptoJS.AES.encrypt(user.correo, 'secretbirria321');
    console.log(ciphertext.toString());
    callback(ciphertext.toString());
};

exports.isValidToken = function (token,callback) {
    // Decrypt 
    var bytes = CryptoJS.AES.decrypt(token.toString(), 'secretbirria321');
    callback(bytes.toString(CryptoJS.enc.Utf8));        
};