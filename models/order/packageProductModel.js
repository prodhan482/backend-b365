import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const packageProductSchema = Schema({
    promoPackage: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Package'
    },
    productSku: {
        type: Number,
        required: [true, 'Please add productSku']
    },
}, {
    timestamps: true
})

export default model('PackageProduct', packageProductSchema)
