import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const subcategorySchema = Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
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
        // required: true
    },
    parentSqlId: {
        type: Number,
    },
    sqlId: {
        type: Number,
    },
    productCount: {
        type: Number,
    },
    level: {
        type: Number,
    },
    isActive: {
        type: Boolean,
    }
})

export default model('Subcategory', subcategorySchema)