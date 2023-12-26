// Imports
import { Router } from 'express';

const divisionRoutes = Router();

import { getAllDivisions, getSingleDivision, setDivision, updateDivision, deleteDivision, getDivisionFromDistrict } from '../../controllers/address/divisionController.js';
import {protectForEmployee} from '../../middleware/authMiddleware.js'

// Routes
divisionRoutes.route('/').get(getAllDivisions).post(protectForEmployee, setDivision);
divisionRoutes.route('/:id').patch(protectForEmployee, updateDivision).delete(protectForEmployee, deleteDivision);
divisionRoutes.route('/getSingleDivision/:id').get(getSingleDivision)
divisionRoutes.route('/getDivisionFromDistrict/:id').get( getDivisionFromDistrict);
// Export
export default divisionRoutes