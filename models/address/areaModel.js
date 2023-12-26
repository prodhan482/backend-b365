import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const areaSchema = Schema({
    name: {
        type: String,
        required: true
    },
    district: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'District'
    }
})

export default model('Area', areaSchema)