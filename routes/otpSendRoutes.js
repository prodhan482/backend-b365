import { Router } from 'express';
import { sendOTP } from '../controllers/otpSend.js';

const otpSendRoutes = Router();

// import {protectForEmployee} from '../middleware/authMiddleware.js' 

// Routes
otpSendRoutes.route('/').post(sendOTP);

// Export
export default otpSendRoutes