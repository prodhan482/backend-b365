import { Router } from 'express';

import { getAllSubcategories, setSubcategory, updateSubcategory, deleteSubcategory, getSingleSubcategory, getAllSubcategoriesFromCategory } from '../../controllers/product/subcategoryController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const subcategoryRoutes = Router();

// Routes
subcategoryRoutes.route('/').get(getAllSubcategories).post(protectForEmployee, setSubcategory);
subcategoryRoutes.route('/:id').patch(protectForEmployee, updateSubcategory).delete(protectForEmployee, deleteSubcategory);
subcategoryRoutes.route('/getSingleSubcategory/:id').get(getSingleSubcategory);
subcategoryRoutes.route('/getAllSubcategoriesFromCategory/:id').get(getAllSubcategoriesFromCategory);

// Export
export default subcategoryRoutes;