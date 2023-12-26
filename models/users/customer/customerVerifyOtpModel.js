import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const customerVerifyOtpSchema = Schema({
    mobile: {
        type: String,
    },
    otp: {
        type: String,
    },
}, {
    timestamps: true
})

export default model('CustomerVerifyOtp', customerVerifyOtpSchema);