// Imports
import { Router } from 'express';

const addressRoutes = Router();

import { getAllAddresses, getMyAddresses, setAddress, updateAddress, deleteAddress, getSingleAddress } from '../../controllers/address/addressController.js';

import {protectForEmployee, protectForCustomer} from '../../middleware/authMiddleware.js'

// Routes
addressRoutes.route('/').get(protectForEmployee, getAllAddresses).post(protectForCustomer, setAddress);
addressRoutes.route('/:id').patch(protectForCustomer, updateAddress).delete(protectForCustomer, deleteAddress);
addressRoutes.route('/getMyAddresses').get(protectForCustomer, getMyAddresses)
addressRoutes.route('/getSingleAddress/:id').get(protectForEmployee, getSingleAddress)

// Export
export default addressRoutes