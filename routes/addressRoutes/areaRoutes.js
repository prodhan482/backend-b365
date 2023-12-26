// Imports
import { Router } from 'express';

const areaRoutes = Router();

import { getAllAreas, getSingleArea, getAreasFromDistrict, setArea, updateArea, deleteArea } from '../../controllers/address/areaController.js';

import {protectForEmployee} from '../../middleware/authMiddleware.js'

// Routes
areaRoutes.route('/').get(getAllAreas).post(protectForEmployee, setArea);
areaRoutes.route('/:id').patch(protectForEmployee, updateArea).delete(protectForEmployee, deleteArea);
areaRoutes.route('/getSingleArea/:id').get(getSingleArea)
areaRoutes.route('/getAreasFromDistrict/:id').get(getAreasFromDistrict)

// Export
export default areaRoutes