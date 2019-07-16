const mongoose = require('mongoose');
const phoneSchema=new mongoose.Schema({
    type:{
        type:String,
        enum:['Mobile','Landline'],
        default:'Mobile'
    },
    contact:{
        type:Number,
        required: [true, "Phone Number is required"]
    }
})

module.exports={phoneSchema}