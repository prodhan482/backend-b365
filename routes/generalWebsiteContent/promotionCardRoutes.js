import { Router } from 'express';

import { getAllPromotionCards, setPromotionCard, updatePromotionCard, deletePromotionCard, getSinglePromotionCard } from '../../controllers/generalWebsiteContent/promotionCardController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const promotionCardRoutes = Router();

// Routes
promotionCardRoutes.route('/').get(getAllPromotionCards).post(protectForEmployee, setPromotionCard);
promotionCardRoutes.route('/:id').patch(protectForEmployee, updatePromotionCard).delete(protectForEmployee, deletePromotionCard);
promotionCardRoutes.route('/getSinglePromotionCard/:id').get(getSinglePromotionCard);

// Export
export default promotionCardRoutes;