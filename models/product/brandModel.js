import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const brandSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    link: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        required: true
    }
})

export default model('Brand', brandSchema)