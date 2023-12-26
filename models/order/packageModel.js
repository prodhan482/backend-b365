import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const packageSchema = Schema({
    name: {
        type: String,
        required: true
    },
    discountAmount: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
})

export default model('Package', packageSchema)