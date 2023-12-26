import {Router} from 'express'
import employeeRoutes from '../users/employee/employeeRoutes.js'
import customerRoutes from '../users/customer/customerRoutes.js'

const userRoutes = Router()

userRoutes.use('/employees', employeeRoutes)
userRoutes.use('/customers', customerRoutes)

export default userRoutes