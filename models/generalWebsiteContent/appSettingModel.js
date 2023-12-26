import mongoose from 'mongoose';
const {Schema, model} = mongoose

const appSettingSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please Add Name'],
    },
    image: {
        type: String,
        required: true
    }
})

export default model('AppSetting', appSettingSchema)