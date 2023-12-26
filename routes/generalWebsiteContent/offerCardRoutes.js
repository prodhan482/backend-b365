import { Router } from 'express';

import { getAllOfferCards, setOfferCard, updateOfferCard, deleteOfferCard, getSingleOfferCard } from '../../controllers/generalWebsiteContent/offerCardController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const offerCardRoutes = Router();

// Routes
offerCardRoutes.route('/').get(getAllOfferCards).post(protectForEmployee, setOfferCard);
offerCardRoutes.route('/:id').patch(protectForEmployee, updateOfferCard).delete(protectForEmployee, deleteOfferCard);
offerCardRoutes.route('/getSingleOfferCard/:id').get(getSingleOfferCard);

// Export
export default offerCardRoutes;