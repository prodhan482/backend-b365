import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique:true,
  },
  image: {
    type: String,
    required: true,
  },
  subcategoryName: {
    type: String,
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory' 
  },
  plastic_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plastic', 
    default:null,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Boolean,
    default: false,
  },
  discounted_price: {
    type: Number,
    default:false,
  },
  quantity_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quantity', 
    default:null,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default:null, 
    },
  ],
  description: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
  brand_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand', 
    default:null,
  },
  related_items_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RelatedItems',
    default:null,
  },
  related_promotion_banner: {
    type: String,
  },
  product_sticker_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductSticker',
    default:null,
  },
  visibility: {
    type: Boolean,
    default: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default:null,
  },
  updated_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default:null,
  },
},
  {
    timestamps: true,
  });

export default model('Product', productSchema);
