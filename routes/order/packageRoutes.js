import { Router } from 'express';

import { getAllPackages, setPackage, updatePackage, deletePackage, getSinglePackage } from '../../controllers/order/packageController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const packageRoutes = Router();

// Routes
packageRoutes.route('/').get(getAllPackages).post(protectForEmployee, setPackage);
packageRoutes.route('/:id').patch(protectForEmployee, updatePackage).delete(protectForEmployee, deletePackage);
packageRoutes.route('/getSinglePackage/:id').get(getSinglePackage);

// Export
export default packageRoutes;