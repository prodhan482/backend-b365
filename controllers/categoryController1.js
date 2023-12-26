import asyncHandler from 'express-async-handler';
import Category from '../models/categoryModel.js';

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  res.status(200).json(categories);
});

const createCategory = asyncHandler(async (req, res) => {
  const {
    category_name,
    parent_id,
    tree_path,
    level,
    Enable,
    include_menu,
    category_image,
    created_by,
    updated_by,
  } = req.body;

  if (!category_name) {
    res.status(400).json({ error: 'Category name is required' });
  } else if (parent_id) {
    const parentCategory = await Category.findById(parent_id);
    if (parentCategory) {
      if (parentCategory.parent_id && parentCategory.parent_id.equals(parent_id)) {
        res.status(400).json({ error: 'A child cannot be a parent of its own parent' });
        return;
      }
    }
  }

  const category = await Category.create({
    category_name,
    parent_id,
    tree_path,
    level,
    Enable,
    include_menu,
    category_image,
    created_by,
    updated_by,
  });

  res.status(201).json(category);
});

const updateCategoryById = asyncHandler(async (req, res) => {
  const categoryId = req.params.id;
  const category = await Category.findById(categoryId);

  if (!category) {
    res.status(404).json({ error: 'Category not found' });
    return;
  }

  if (req.body.parent_id) {
    const parentCategory = await Category.findById(req.body.parent_id);
    if (parentCategory) {
      if (parentCategory.parent_id && parentCategory.parent_id.equals(categoryId)) {
        res.status(400).json({ error: 'A child cannot be a parent of its own parent' });
        return;
      }
    }
  }

  category.category_name = req.body.category_name;
  category.parent_id = req.body.parent_id;
  category.tree_path = req.body.tree_path;
  category.level = req.body.level;
  category.Enable = req.body.Enable;
  category.include_menu = req.body.include_menu;
  category.category_image = req.body.category_image;
  category.updated_by = req.body.updated_by;

  await category.save();

  res.status(200).json(category);
});

const deleteCategoryById = asyncHandler(async (req, res) => {
  const categoryId = req.params.id;
  const category = await Category.findById(categoryId);

  if (!category) {
    res.status(404).json({ error: 'Category not found' });
  } else {
    await category.remove();
    res.status(204).json({ message: 'Category removed' });
  }
});

export { getCategories, createCategory, updateCategoryById, deleteCategoryById };
