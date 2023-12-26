import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const customerSchema = Schema({
    firstName: {
        type: String,
        // required: [true, 'Please add a name']
    },
    lastName: {
        type: String,
        // required: [true, 'Please add a name']
    },
    email: {
        type: String,
        // required: [true, 'Please add an email'],
        // unique: true
    },
    password: {
        type: String,
        // required: [true, 'Please add a password']
    },
    mobile: {
        type: String,
        // required: [true, 'Please add your mobile number'],
        // unique: true,
        // minLength: [11, 'Mobile Number must be exactly 11 digits long'],
        // maxLength: [11, 'Mobile Number must be exactly 11 digits long']
    },
    image: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    isVerified : {
        type : Boolean,
        default : false
    }
}, {
    timestamps: true
})

export default model('Customer', customerSchema);