var router = require('express').Router();
var {
    registerUser
} = require('./user/user.function');

router.post('/register', registerUser)
module.exports=router;