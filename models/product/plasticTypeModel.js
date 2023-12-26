import mongoose from 'mongoose';
const {Schema, model} = mongoose

const plasticTypeSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please Add name'],
    },
    point: {
        type: Number,
        required: [true, 'Please Add point'],
    }
})

export default model('PlasticType', plasticTypeSchema)