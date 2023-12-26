import { Router } from 'express';

import { getAllFeaturedCategories, setFeaturedCategory, updateFeaturedCategory, deleteFeaturedCategory, getSingleFeaturedCategory } from '../../controllers/product/featuredCategoryController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const featuredCategory = Router();

// Routes
featuredCategory.route('/').get(getAllFeaturedCategories).post(protectForEmployee, setFeaturedCategory);
featuredCategory.route('/:id').patch(protectForEmployee, updateFeaturedCategory).delete(protectForEmployee, deleteFeaturedCategory);
featuredCategory.route('/getSingleFeaturedCategory/:id').get(getSingleFeaturedCategory);

// Export
export default featuredCategory;