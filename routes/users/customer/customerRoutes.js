// Imports
import { Router } from 'express';

import { registerCustomer, loginCustomer, getMe, getAllCustomers, getSingleCustomer, verifyCustomer, changeCustomerPassword, forgotCustomerPassword, resetForgottenCustomerPassword, editMyProfile } from '../../../controllers/users/customer/customerController.js';
import { protectForCustomer, protectForEmployee } from '../../../middleware/authMiddleware.js';

const router = Router()


router.get('/getAllCustomers', protectForEmployee, getAllCustomers);
router.get('/getSingleCustomer/:id', protectForEmployee, getSingleCustomer);
router.post('/register', registerCustomer);
router.patch('/verify', verifyCustomer);

router.post('/login', loginCustomer);
router.get('/', protectForCustomer, getMe);

router.patch('/changeCustomerPassword', protectForCustomer, changeCustomerPassword)
router.post('/forgotCustomerPassword', forgotCustomerPassword)
router.patch('/resetCustomerPassword', resetForgottenCustomerPassword)

router.patch('/editMyProfile', protectForCustomer, editMyProfile)

export default router;