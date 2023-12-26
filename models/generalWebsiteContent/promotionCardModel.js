import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const promotionCardSchema = Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    link: {
        type: String,
        // required: [true, 'Please add link']
    },
    image: {
        type: String,
        required: true
    }
})

export default model('PromotionCard', promotionCardSchema)