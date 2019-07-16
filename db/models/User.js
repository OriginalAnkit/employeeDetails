const mongoose = require('mongoose');
const {
    addressSchema
} = require('./Address');
const {
    phoneSchema
} = require('./Phone')

const userSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: [true, 'First Name is required'],
            trim: true
        },
        lastName: {
            type: String,
            required: [true, 'Last Name is required'],
            trim: true
        }
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        trim: true,
        min: [6, 'Password must of 6 character long'],
        required: [true, 'password is required']
    },
    address: [addressSchema],
    phone: [phoneSchema]
})

userSchema.pre('save',function(next) {
    if(this.password){
        
    }else{
        next()
    }
})

module.exports = {
     userSchema
}