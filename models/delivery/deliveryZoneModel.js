import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const deliveryZoneSchema = Schema({
    name: {
        type: String,
        required: true
    }
})

export default model('DeliveryZone', deliveryZoneSchema)