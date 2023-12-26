import { Router } from 'express';

import { getAllDeliveryAreas, setDeliveryArea, updateDeliveryArea, deleteDeliveryArea, getSingleDeliveryArea } from '../../controllers/delivery/deliveryAreaController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const deliveryAreaRoutes = Router();

// Routes
deliveryAreaRoutes.route('/').get(getAllDeliveryAreas).post(protectForEmployee, setDeliveryArea);
deliveryAreaRoutes.route('/:id').patch(protectForEmployee, updateDeliveryArea).delete(protectForEmployee, deleteDeliveryArea);
deliveryAreaRoutes.route('/getSingleDeliveryArea/:id').get(getSingleDeliveryArea);

// Export
export default deliveryAreaRoutes;