import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const orderStatusSchema = Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Employee'
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Order'
    },
    status: {
        type: String,
        enum: ['processing', 'pending', 'canceled', 'delivered']
    }
}, {
    timestamps: true
})

export default model('OrderStatus', orderStatusSchema)
