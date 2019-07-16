const _ = require('lodash')

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
    
}

module.exports = { checkFields, encryptPass}

