import { Router } from 'express';

import { getAllBrands, setBrand, updateBrand, deleteBrand, getSingleBrand } from '../../controllers/product/brandController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const brandRoutes = Router();

// Routes
brandRoutes.route('/').get(getAllBrands).post(protectForEmployee, setBrand);
brandRoutes.route('/:id').patch(protectForEmployee, updateBrand).delete(protectForEmployee, deleteBrand);
brandRoutes.route('/getSingleBrand/:id').get(getSingleBrand);

// Export
export default brandRoutes;