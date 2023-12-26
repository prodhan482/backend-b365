// const mongoose = require('mongoose');
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const categorySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  precedence: {
    type: Number,
    required: true,
  }

});

export default model("Category", categorySchema);