import { Router } from 'express';

import { getAllPlasticTypes, setPlasticType, updatePlasticType, deletePlasticType, getSinglePlasticType } from '../../controllers/product/plasticTypeController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const plasticTypeRoutes = Router();

// Routes
plasticTypeRoutes.route('/').get(getAllPlasticTypes).post(protectForEmployee, setPlasticType);
plasticTypeRoutes.route('/:id').patch(protectForEmployee, updatePlasticType).delete(protectForEmployee, deletePlasticType);
plasticTypeRoutes.route('/plasticTypes/:id').get(getSinglePlasticType);

// Export
export default plasticTypeRoutes;