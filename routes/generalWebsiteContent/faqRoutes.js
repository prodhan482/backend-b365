import { Router } from 'express';
import { getAllFaqs, getSingleFaq, setFaq, updateFaq, deleteFaq } from '../../controllers/generalWebsiteContent/faqController.js';

const faqRoutes = Router();

import {protectForEmployee} from '../../middleware/authMiddleware.js'

// Routes
faqRoutes.route('/').get(getAllFaqs).post(protectForEmployee, setFaq);
faqRoutes.route('/:id').patch(protectForEmployee, updateFaq).delete(protectForEmployee, deleteFaq);
faqRoutes.route('/getSingleFaq/:id').get(protectForEmployee, getSingleFaq);

// Export
export default faqRoutes