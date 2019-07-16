const mongoose=require('mongoose');

const {userSchema}=require('./models/User');
module.exports={
    User:mongoose.model('user',userSchema)
}