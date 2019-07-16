const mongoose = require('mongoose');
const addressSchema=new mongoose.Schema({
    type:{
        type:String,
        enum:['temp','permanent'],
        default:'permanent'
    },
    houseNumber:{
        type:Number,
        require:true,
        required:[true,"House Number is required"]
    },
    area:{
        type:String,
        require:true,
        required: [true, "Area is required"]
    },
    city:{
        type:String,
        require:true,
        required: [true, "City is required"]

    },
    pinCode:{
        type:Number,
        require:true,
        required: [true, "Pin Code is required"]
    }

})

module.exports={addressSchema}