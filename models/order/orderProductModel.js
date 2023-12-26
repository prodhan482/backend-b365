import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const orderProductSchema = Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Order'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: [true, 'Please add quantity']
    },
    unitPrice: {
        type: Number,
        required: [true, 'Please add unitPrice']
    },
    total: {
        type: Number,
        required: [true, 'Please add total']
    }
}, {
    timestamps: true
})

export default model('orderProduct', orderProductSchema)
