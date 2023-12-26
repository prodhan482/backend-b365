import mongoose from 'mongoose';
const {Schema, model} = mongoose

const faqSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please Add name'],
    },
    description: {
        type: String,
        required: [true, 'Please Add description'],
    },
})

export default model('Faq', faqSchema)