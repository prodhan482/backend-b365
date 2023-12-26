// Imports
import { Router } from 'express';

const paymentTypeRoutes = Router();

import { getAllPaymentTypes, getSinglePaymentType, setPaymentType, updatePaymentType, deletePaymentType } from '../../controllers/order/paymentTypeController.js';
import {protectForEmployee} from '../../middleware/authMiddleware.js'

// Routes
paymentTypeRoutes.route('/').get(getAllPaymentTypes).post(protectForEmployee, setPaymentType);
paymentTypeRoutes.route('/:id').patch(protectForEmployee, updatePaymentType).delete(protectForEmployee, deletePaymentType);
paymentTypeRoutes.route('/getSinglePaymentType/:id').get(getSinglePaymentType)
// Export
export default paymentTypeRoutes