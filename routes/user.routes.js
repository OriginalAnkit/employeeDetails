var router = require('express').Router();
var userFun= require('./user/user.function');

router.post('/register', userFun.registerUser);
router.post('/login',userFun.loginUser)
module.exports=router;