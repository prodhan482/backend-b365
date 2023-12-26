import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const subsubcategorySchema = Schema({
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Subcategory'
    },
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    precedence: {
        type: Number,
        required: [true, 'Please add precedence']
    },
    image: {
        type: String,
        required: true
    }
})

export default model('Subsubcategory', subsubcategorySchema)