import { Router } from 'express';
import { getAllPromotionFAQs, getSinglePromotionFAQ, setPromotionFAQ, updatePromotionFAQ, deletePromotionFAQ } from '../../controllers/generalWebsiteContent/promotionFAQController.js';

const promotionFAQRoutes = Router();

import {protectForEmployee} from '../../middleware/authMiddleware.js'

// Routes
promotionFAQRoutes.route('/').get(getAllPromotionFAQs).post(protectForEmployee, setPromotionFAQ);
promotionFAQRoutes.route('/:id').patch(protectForEmployee, updatePromotionFAQ).delete(protectForEmployee, deletePromotionFAQ);
promotionFAQRoutes.route('/getSinglePromotionFAQ/:id').get(protectForEmployee, getSinglePromotionFAQ);

// Export
export default promotionFAQRoutes