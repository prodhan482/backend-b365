import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const categorySchema = new Schema({
  category_name: {
    type: String,
    required: true,
  },
  parent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
  },
  tree_path: {
    type: String,
  },
  level: {
    type: Number,
    default: 0,
  },
  Enable: {
    type: Boolean,
    default: true,
  },
  include_menu: {
    type: Boolean,
    default: true,
  },
  category_image: {
    type: String,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  updated_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
},
  {
    timestamps: true,
  });

categorySchema.pre('save', async function (next) {
  if (!this.parent_id) {
    this.tree_path = this._id.toString();
  } else {
    const parent = await this.constructor.findById(this.parent_id);
    if (!parent) {
      next(new Error('Parent category not found'));
      return;
    }
    this.tree_path = `${parent.tree_path}/${this._id}`;
  }
  next();
});

export default model('Category', categorySchema);