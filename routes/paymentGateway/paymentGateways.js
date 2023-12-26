import { Router } from 'express';
import { createPayment, executePayment, createPayment2 } from '../../controllers/paymentGateway/Bkash/createPayment.js';

const paymentGateways = Router();

paymentGateways.route('/paymentCreate').post(createPayment)
paymentGateways.route('/executePayment').post(executePayment)
paymentGateways.route('/createPayment2').post(createPayment2)

export default paymentGateways

