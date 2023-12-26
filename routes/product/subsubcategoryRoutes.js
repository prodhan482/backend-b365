import { Router } from 'express';

import { getAllSubsubcategories, setSubsubcategory, updateSubsubcategory, deleteSubsubcategory, getSingleSubsubcategory } from '../../controllers/product/subsubcategoryController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const subsubcategoryRoutes = Router();

// Routes
subsubcategoryRoutes.route('/').get(getAllSubsubcategories).post(protectForEmployee, setSubsubcategory);
subsubcategoryRoutes.route('/:id').patch(protectForEmployee, updateSubsubcategory).delete(protectForEmployee, deleteSubsubcategory);
subsubcategoryRoutes.route('/getSingleSubsubcategory/:id').get(getSingleSubsubcategory);

// Export
export default subsubcategoryRoutes;