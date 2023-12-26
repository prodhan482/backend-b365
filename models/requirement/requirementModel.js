import mongoose from 'mongoose';
const {Schema, model} = mongoose

const requirementSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please Add name'],
    },
    description: {
        type: String,
        required: [true, 'Please Add description'],
    },
    precedence: {
        type: Number,
        required: [true, 'Please Add precedence'],
    }
})

export default model('Requirement', requirementSchema)