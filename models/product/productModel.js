import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Employee'
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Brand'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Category'
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Subcategory'
    },
    subsubcategory: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Subsubcategory'
    },
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    sku: {
        type: Number,
        required: [true, 'Please add sku']
    },
    price: {
        type: Number,
        required: [true, 'Please add price']
    },
    shortDescription: {
        type: String,
        required: [true, 'Please add shortDescription']
    },
    description: {
        type: String,
        required: [true, 'Please add description']
    },
    quantity: {
        type: Number,
        required: [true, 'Please add quantity']
    },
    isVisible: {
        type: Boolean,
        required: [true, 'Please add isVisible']
    },
    isPlastic: {
        type: Boolean,
        required: [true, 'Please add isPlastic']
    },
    plasticType: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'PlasticType'
    },
    weight: {
        type: Number,
        // required: true
    },
    image: {
        type: String,
        required: true
    },
    isDiscount: {
        type: Boolean,
        default: false
    },
    discountType: {
        type: String,
        enum: ['percentage', 'fixedAmount']
    },
    discountAmount: {
        type: Number,
        // required: true
    },
    discountedAmount: {
        type: Number,
        // required: true
    }
}, {
    timestamps: true
})

export default model('Product', productSchema)
