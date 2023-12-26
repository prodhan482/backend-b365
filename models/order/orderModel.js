import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const orderSchema = Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Address'
    },
    area: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Area'
    },
    district: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'District'
    },
    division: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Division'
    },
    // orderStatus: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'OrderStatus'
    // },
    orderStatus: {
        type: String,
        enum: ['processing', 'pending', 'canceled', 'delivered']
    },
    fullAddressString: {
        type: String,
        required: [true, 'Please add fullAddressString']
    },
    areaString: {
        type: String,
        required: [true, 'Please add areaString']
    },
    total: {
        type: Number,
        required: [true, 'Please add total']
    },
    subtotal: {
        type: Number,
        // required: [true, 'Please add subtotal']
    },
    grandTotal: {
        type: String,
        // required: [true, 'Please add grandTotal']
    },
    isPromoCode: {
        type: Boolean,
        default : false
    },
    promoCode: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'PromoCode'
    },
    notes: {
        type: String,
        // required: [true, 'Please add notes']
    }
}, {
    timestamps: true
})

export default model('Order', orderSchema)
