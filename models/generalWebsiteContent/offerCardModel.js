import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const offerCardSchema = Schema({
    link: {
        type: String,
        required: [true, 'Please add link']
    },
    image: {
        type: String,
        required: true
    }
})

export default model('OfferCard', offerCardSchema)