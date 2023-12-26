import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const homeSliderSchema = Schema({
    precedence: {
        type: Number,
        required: [true, 'Please add precedence']
    },
    link: {
        type: String,
        // required: [true, 'Please add link']
    },
    image: {
        type: String,
        required: true
    }
})

export default model('HomeSlider', homeSliderSchema)