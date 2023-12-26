import { Router } from 'express';
import { getAllPromoCodes, getSinglePromoCode, createPromoCode, updatePromoCode, deletePromoCode,getPromoCodeByPromoCode } from '../../controllers/order/promoCodeController.js';

const promoCodeRoutes = Router();

import {protectForEmployee,protectForCustomer} from '../../middleware/authMiddleware.js'

// Routes
promoCodeRoutes.route('/').get(getAllPromoCodes).post(protectForEmployee, createPromoCode);
promoCodeRoutes.route('/:id').patch(protectForEmployee, updatePromoCode).delete(protectForEmployee, deletePromoCode);
promoCodeRoutes.route('/getSinglePromoCode/:id').get(protectForEmployee, getSinglePromoCode);
promoCodeRoutes.route('/getPromoCodeByPromoCode/:promo').get(protectForCustomer, getPromoCodeByPromoCode);

// Export
export default promoCodeRoutes