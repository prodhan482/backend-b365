import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const districtSchema = Schema({
    name: {
        type: String,
        required: true
    },
    division: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Division'
    }
})

export default model('District', districtSchema)