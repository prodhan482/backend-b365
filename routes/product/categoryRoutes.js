import { Router } from 'express';

import { getAllCategories, setCategory, updateCategory, deleteCategory, getSingleCategory } from '../../controllers/product/categoryController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const categoryRoutes = Router();

// Routes
categoryRoutes.route('/').get(getAllCategories).post(protectForEmployee, setCategory);
categoryRoutes.route('/:id').patch(protectForEmployee, updateCategory).delete(protectForEmployee, deleteCategory);
categoryRoutes.route('/getSingleCategory/:id').get(getSingleCategory);

// Export
export default categoryRoutes;