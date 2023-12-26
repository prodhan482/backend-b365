import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: ['customer', 'admin', 'seller'],
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  userStatus: {
    type: String,
    enum: ['enable', 'disable'],
    default: 'enable',
  },
  lastLoginDate: {
    type: Date,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

userSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    if (error.keyPattern.email && error.keyPattern.phoneNumber) {
      next(new Error('Email and mobile number are already in use.'));
    } else if (error.keyPattern.email) {
      next(new Error('Email is already in use.'));
    } else if (error.keyPattern.phoneNumber) {
      next(new Error('Mobile number is already in use.'));
    } else {
      next(error);
    }
  } else {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

export default model('User', userSchema);
