import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const divisionSchema = Schema({
    name: {
        type: String,
        required: true
    }
})

export default model('Division', divisionSchema)