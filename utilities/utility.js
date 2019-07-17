const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

function checkFields(obj, fields) {
    f ={};
    fields.some(fi => {
        // console.log(_.get(obj, fi))
        value=_.get(obj, fi)
        if (value == null || value == "") {
            f = {
                e: true,
                mf: fi
            }
            return true
        }else{
            f[fi]=value
        }
        return false
    });
    return f
}


function encryptPass(pass) {
    var salt = bcrypt.genSaltSync(global.proKeys.bRounds);
    var hash = bcrypt.hashSync(pass, salt);

    return hash
}

function comparePass(pass,hash){
    return bcrypt.compareSync(pass, hash);
}

function generateToken(details){
    var token = jwt.sign(details,global.proKeys.secret);
    return token;
}
module.exports = {
    checkFields,
    encryptPass,
    comparePass,
    generateToken
}