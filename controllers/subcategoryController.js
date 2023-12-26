import asyncHandler from "express-async-handler";
import Subcategory from '../models/subcategoryModel.js';
import Category from '../models/categoryModel.js';





const getSubcategories = asyncHandler(async (req, res) => {
  const subcategories = await Subcategory.find();

  res.status(200).json(subcategories);
});

const createSubcategory = asyncHandler(async (req, res) => {
  const { name, categoryName } = req.body;

  if (!name || !categoryName) {
    res.status(400).json({ error: 'Name and categoryName are required' });
  } else {
    const parentCategory = await Category.findOne({ name: categoryName });

    if (!parentCategory) {
      res.status(400).json({ error: 'Parent category not found' });
    } else {
      const subcategory = new Subcategory({
        name,
        categoryName,
        parentCategory: parentCategory._id,
      });

      await subcategory.save();
      res.status(201).json(subcategory);
    }
  }
});


const updateSubcategory = asyncHandler(async (req, res) => {
  const subcategoryId = req.params.id;
  const { name, categoryName } = req.body;

  if (!name || !categoryName) {
    res.status(400).json({ error: 'Name and categoryName are required' });
  } else {
    const parentCategory = await Category.findOne({ name: categoryName });

    if (!parentCategory) {
      res.status(400).json({ error: 'Parent category not found' });
    } else {
      const subcategory = await Subcategory.findById(subcategoryId);

      if (!subcategory) {
        res.status(404).json({ error: 'Subcategory not found' });
      } else {
        subcategory.name = name;
        subcategory.categoryName = categoryName;
        subcategory.parentCategory = parentCategory._id;

        await subcategory.save();
        res.status(200).json(subcategory);
      }
    }
  }
});


const deleteSubcategory = asyncHandler(async (req, res) => {
  const { id } = req.params.id;

  const subcategory = await Subcategory.findById(id);

  if (!subcategory) {
    res.status(400);
    throw new Error("Subcategory not found");
  }

  await Subcategory.deleteOne({ _id: id });

  res.status(200).json({ id: id });
});

export {
  getSubcategories,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory
};
