import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const socialLinkSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    visibility: {
        type: Boolean,
        required: [true, 'Please add visibility']
    },
    link: {
        type: String,
        required: [true, 'Please add link']
    }
})

export default model('SocialLink', socialLinkSchema)