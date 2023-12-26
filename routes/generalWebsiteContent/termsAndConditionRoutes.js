import { Router } from 'express';
import { getAllTermsAndConditions, getSingleTermsAndCondition, setTermsAndCondition, updateTermsAndCondition, deleteTermsAndCondition } from '../../controllers/generalWebsiteContent/termsAndConditionController.js';

const termsAndConditionRoutes = Router();

import {protectForEmployee} from '../../middleware/authMiddleware.js'

// Routes
termsAndConditionRoutes.route('/').get(getAllTermsAndConditions).post(protectForEmployee, setTermsAndCondition);
termsAndConditionRoutes.route('/:id').patch(protectForEmployee, updateTermsAndCondition).delete(protectForEmployee, deleteTermsAndCondition);
termsAndConditionRoutes.route('/getSingleTermsAndCondition/:id').get(protectForEmployee, getSingleTermsAndCondition);

// Export
export default termsAndConditionRoutes