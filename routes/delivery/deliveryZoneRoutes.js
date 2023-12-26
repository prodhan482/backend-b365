import { Router } from 'express';

import { getAllDeliveryZones, setDeliveryZone, updateDeliveryZone, deleteDeliveryZone, getSingleDeliveryZone } from '../../controllers/delivery/deliveryZoneController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const deliveryZoneRoutes = Router();

// Routes
deliveryZoneRoutes.route('/').get(getAllDeliveryZones).post(protectForEmployee, setDeliveryZone);
deliveryZoneRoutes.route('/:id').patch(protectForEmployee, updateDeliveryZone).delete(protectForEmployee, deleteDeliveryZone);
deliveryZoneRoutes.route('/getSingleDeliveryZone/:id').get(getSingleDeliveryZone);

// Export
export default deliveryZoneRoutes;