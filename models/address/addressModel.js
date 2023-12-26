import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const addressSchema = Schema({
    customer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    area: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'Area'
    },
    name: {
        type: String,
        required: true
    },
    fullAddress: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['home', 'office', 'other']
    }
})

export default model('Address', addressSchema)