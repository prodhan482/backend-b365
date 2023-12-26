import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = Schema({
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    precedence: {
        type: Number,
        required: [true, 'Please add precedence']
    },
    image: {
        type: String,
        // required: true
    },
    sqlId: {
        type: Number,
    },
    productCount: {
        type: Number,
    },
    level: {
        type: Number,
    },
    isActive: {
        type: Boolean,
    },
    isDiscount: {
        type: Boolean,
        default: false
    },
    discountType: {
        type: String,
        enum: ['percentage', 'fixedAmount']
    },
    discountAmount: {
        type: Number,
        // required: true
    }
})

export default model('Category', categorySchema)