import mongoose from 'mongoose';
const {Schema, model} = mongoose

const termsAndConditionSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please Add name'],
    },
    description: {
        type: String,
        required: [true, 'Please Add description'],
    },
})

export default model('TermsAndCondition', termsAndConditionSchema)