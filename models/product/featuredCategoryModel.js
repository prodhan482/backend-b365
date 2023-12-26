import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const featuredCategorySchema = Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    precedence: {
        type: Number,
        required: true
    }
})

export default model('FeaturedCategory', featuredCategorySchema)