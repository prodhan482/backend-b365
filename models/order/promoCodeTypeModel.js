import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const promoCodeTypeSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export default model('PromoCodeType', promoCodeTypeSchema)