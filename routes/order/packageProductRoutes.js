import { Router } from 'express';

import { getAllPackageProducts, setPackageProduct, updatePackageProduct, deletePackageProduct, getSinglePackageProduct } from '../../controllers/order/packageProductController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const packageProductRoutes = Router();

// Routes
packageProductRoutes.route('/').get(getAllPackageProducts).post(protectForEmployee, setPackageProduct);
packageProductRoutes.route('/:id').patch(protectForEmployee, updatePackageProduct).delete(protectForEmployee, deletePackageProduct);
packageProductRoutes.route('/getSinglePackageProduct/:id').get(getSinglePackageProduct);

// Export
export default packageProductRoutes;