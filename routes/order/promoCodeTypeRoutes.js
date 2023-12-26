import { Router } from 'express';

import { getAllPromoCodeTypes, setPromoCodeType, updatePromoCodeType, deletePromoCodeType, getSinglePromoCodeType } from '../../controllers/order/promoCodeTypeController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const promoCodeTypeRoutes = Router();

// Routes
promoCodeTypeRoutes.route('/').get(getAllPromoCodeTypes).post(protectForEmployee, setPromoCodeType);
promoCodeTypeRoutes.route('/:id').patch(protectForEmployee, updatePromoCodeType).delete(protectForEmployee, deletePromoCodeType);
promoCodeTypeRoutes.route('/getSinglePromoCodeType/:id').get(getSinglePromoCodeType);

// Export
export default promoCodeTypeRoutes;