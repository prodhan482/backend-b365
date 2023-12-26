import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const homeBannerSchema = Schema({
    precedence: {
        type: Number,
        required: [true, 'Please add precedence']
    },
    image: {
        type: String,
        required: true
    }
})

export default model('HomeBanner', homeBannerSchema)