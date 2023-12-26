import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const deliveryAreaSchema = Schema({
    deliveryZone: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'DeliveryZone'
    },
    area: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Area'
    }
})

export default model('DeliveryArea', deliveryAreaSchema)
