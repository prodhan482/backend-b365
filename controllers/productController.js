import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';

function generateRandomSKU() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let sku = '';
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    sku += characters.charAt(randomIndex);
  }
  return sku;
}

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate('category');

  res.status(200).json(products);
});

const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    subcategoryName,

  } = req.body;

  if (!name || !image || !subcategoryName) {
    res.status(400).json({ error: 'Please provide all required fields' });
  } else {

    const category = await Category.findOne({ name: subcategoryName });

    if (!category) {
      res.status(400).json({ error: 'Subcategory not found' });
    } else {
      const sku = generateRandomSKU(); // Generate a random SKU
      const product = await Product.create({
        name,
        sku,
        image,
        subcategoryName,
        category: category._id,
       
      });

      res.status(201).json(product);
    }
  }
});

const updateProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    res.status(404).json({ error: "Product not found" });
  } else {
    const {
      name,
      image,
      subcategoryName,
  
    } = req.body;

    product.name = name;
    product.image = image;
    product.subcategoryName = subcategoryName;

    
    const category = await Category.findOne({ name: subcategoryName });

    if (!category) {
      res.status(400).json({ error: 'Subcategory not found' });
    } else {
      product.category = category._id; 

      await product.save();
      res.status(200).json(product);
    }
  }
});

const deleteProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    res.status(404).json({ error: "Product not found" });
  } else {
    await product.remove();
    res.status(204).json({ message: "Product removed" });
  }
});

export { getProducts, createProduct, updateProductById, deleteProductById };
