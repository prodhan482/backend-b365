// Imports
import { Router } from 'express';

const districtRoutes = Router();

import { getAllDistricts, getSingleDistrict, getDistrictsFromDivision, setDistrict, updateDistrict, deleteDistrict, getDistrictFromArea } from '../../controllers/address/districtController.js';

import {protectForEmployee} from '../../middleware/authMiddleware.js'

// Routes
districtRoutes.route('/').get(getAllDistricts).post(protectForEmployee, setDistrict);
districtRoutes.route('/:id').patch(protectForEmployee, updateDistrict).delete(protectForEmployee, deleteDistrict);
districtRoutes.route('/getSingleDistrict/:id').get(getSingleDistrict)
districtRoutes.route('/getDistrictsFromDivision/:id').get(getDistrictsFromDivision)
districtRoutes.route('/getDistrictFromArea/:id').get( getDistrictFromArea);
// Export
export default districtRoutes