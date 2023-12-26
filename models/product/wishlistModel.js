import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const wishlistSchema = Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    }
})

export default model('wishlist', wishlistSchema)