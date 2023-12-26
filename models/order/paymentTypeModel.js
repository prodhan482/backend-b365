import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const paymentTypeSchema = Schema({
    name: {
        type: String,
        required: true
    }
})

export default model('PaymentType', paymentTypeSchema)