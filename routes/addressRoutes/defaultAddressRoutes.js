// Imports
import { Router } from 'express';

const defaultAddressRoutes = Router();

import { makeDefaultAddress, getMyDefaultAddress } from '../../controllers/address/defaultAddressController.js';

import {protectForCustomer} from '../../middleware/authMiddleware.js'

// Routes
defaultAddressRoutes.route('/').get(protectForCustomer, getMyDefaultAddress)
defaultAddressRoutes.route('/:id').post(protectForCustomer, makeDefaultAddress)

// Export
export default defaultAddressRoutes