import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const promoCodeSchema = Schema({
    promo: {
        type: String,
        required: [true, 'Please Add Promo Code'],
    },
    maxlimit: {
        type: Number,
        required: [true, 'Please Add Max limit']
    },
    discountType: {
        type: String,
        required: [true, 'Please Add Discount Type'],
        enum: ['percentage', 'amount']
    },
    discountAmount: {
        type: Number,
        required: [true, 'Please Add Discount Amount'],
    },
    promotype: {
        type: String,
        required: [true, 'Please Add Promo type'],
        enum: ['unlimited', 'oneTime']
    },
    validStartDate: {
        type: Date,
        required: [true, 'Please Add Valid Start Date'],
    },
    validEndDate: {
        type: Date,
        required: [true, 'Please Add Valid End Date'], 
    }
}, {
    timestamps: true
})

export default model('PromoCode', promoCodeSchema)
