import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const statusSchema = Schema({
    name: {
        type: String,
        required: true
    }
})

export default model('Status', statusSchema)