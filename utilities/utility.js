const _ = require('lodash')
const bcrypt = require('bcryptjs');
function checkFields(obj, fields) {
    return !fields.some(fi => {
        console.log(_.get(obj, fi))
        if (_.get(obj, fi) == null || _.get(obj, fi) == "") {
            return true
        }
        return false
    });
}


 function encryptPass(pass) {
    var salt = bcrypt.genSaltSync(global.proKeys.bRounds);
    var hash = bcrypt.hashSync(pass, salt);
    
    return hash
}


module.exports = { checkFields, encryptPass }

