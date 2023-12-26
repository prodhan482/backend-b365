// Imports
import { Router } from 'express';

import { getAllEmployees, registerEmployee, loginEmployee, getMe, inviteEmployee, getEmailFromToken, changeEmployeePassword, getAllInvites, getSingleInvite, forgotEmployeePassword, deleteInvite, resetForgottenEmployeePassword } from '../../../controllers/users/employee/employeeController.js';

import { protectForEmployee } from '../../../middleware/authMiddleware.js';

const employeeRoutes = Router()

employeeRoutes.post('/login', loginEmployee);
employeeRoutes.get('/', protectForEmployee, getMe);
employeeRoutes.get('/getAllEmployees', protectForEmployee, getAllEmployees)
employeeRoutes.post('/register', registerEmployee);

employeeRoutes.post('/employeeinvite', protectForEmployee, inviteEmployee)
employeeRoutes.get('/getAllInvites', protectForEmployee, getAllInvites)
employeeRoutes.get('/getSingleInvite/:id', protectForEmployee, getSingleInvite)
employeeRoutes.delete('/deleteInvite/:id', protectForEmployee, deleteInvite)

employeeRoutes.patch('/changeEmployeePassword', protectForEmployee, changeEmployeePassword)
employeeRoutes.post('/forgotEmployeePassword', forgotEmployeePassword)
employeeRoutes.patch('/resetEmployeePassword', resetForgottenEmployeePassword)

employeeRoutes.get('/getEmailFromToken/:token', getEmailFromToken)

export default employeeRoutes;