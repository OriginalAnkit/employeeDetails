var jwt = require('jsonwebtoken');
var {
    User
} = require('../db/model.factory');

async function verifyJWT(req, res, next) {
    var decoded = null;
    try {
        token = req.headers.authorization.split(' ')[1];
        decoded = jwt.verify(token, global.proKeys.secret);
    } catch (e) {
        res.json({
            error: true,
            msg: 'Unauthorized access'
        })
        return;
    }
    console.log(token)
    let user = await User.findById(decoded.id);
    if (!user) {
        res.json({
            error: true,
            msg: 'Unauthorized access'
        })
        return;
    }
    req.user = user;
    next()
}

module.exports = {
    verifyJWT
}