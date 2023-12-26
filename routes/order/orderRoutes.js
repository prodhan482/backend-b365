import { Router } from 'express';

import { customerCreatesOrder, getMyOrders, getAllOrders, getAllOrdersByStatus, getSingleOrder, getOrderProductsFromOrder, getSingleCustomerOrders, getMySingleOrder } from '../../controllers/order/orderController.js';

import { protectForEmployee, protectForCustomer } from '../../middleware/authMiddleware.js';

const orderRoutes = Router();

// Routes
orderRoutes.route('/').get(protectForEmployee, getAllOrders).post(protectForCustomer, customerCreatesOrder);
orderRoutes.route('/getMyOrders').get(protectForCustomer, getMyOrders);
orderRoutes.route('/getMySingleOrder/:id').get(protectForCustomer, getMySingleOrder);
orderRoutes.route('/getAllOrdersByStatus/:status').get(protectForEmployee, getAllOrdersByStatus);
orderRoutes.route('/getSingleOrder/:id').get(protectForEmployee, getSingleOrder);
orderRoutes.route('/getOrderProductsFromOrder/:id').get(protectForEmployee, getOrderProductsFromOrder);
orderRoutes.route('/getSingleCustomerOrders/:id').get(protectForEmployee, getSingleCustomerOrders);

// Export
export default orderRoutes;