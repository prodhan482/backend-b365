import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const customerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: String,
});

export default model('Customer', customerSchema);
 