import asyncHandler from 'express-async-handler';
import Category from '../models/categoryModel.js';


const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  res.status(200).json(categories);
});


const createCategory = asyncHandler(async (req, res) => {


    const { name } = req.body

    if (!name) {
        res.status(400);
        throw new Error('Please provide a category name');
    }

    const category = await Category.create({
        name,
        // name: name,
    });

  res.status(201).json(category);
});


const updateCategory = asyncHandler(async (req, res) => {

    const { id } = req.params.id
    const { name } = req.body
    const category = await Category.findById(id);

  if (!category) {
    res.status(400);
    throw new Error("Category not found");
  }

    const updatedCategory = await Category.findByIdAndUpdate(id, name, {
        new: true,
    });

  res.status(200).json(updatedCategory);
});


const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params.id

    const category = await Category.findById(id);

  if (!category) {
    res.status(400);
    throw new Error("Category not found");
  }

    await Category.deleteOne({ _id: id });

    res.status(200).json({ id: id });
});


export { getCategories, createCategory, updateCategory, deleteCategory };
