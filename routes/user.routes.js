var router = require('express').Router();
var userFun= require('./user/user.function');
var auth=require('../middlewares/auth');

router.post('/register', userFun.registerUser);
router.post('/login',userFun.loginUser);
router.get('/employees',auth.verifyJWT, userFun.listEmployees);
router.get('/employee/:id',auth.verifyJWT,userFun.getOneEployee)
module.exports=router;