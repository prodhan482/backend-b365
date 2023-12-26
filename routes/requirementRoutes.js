import { Router } from 'express';
import { getAllRequirements, getSingleRequirement, setRequirement, updateRequirement, deleteRequirement } from '../controllers/requirement/requirementController.js';

const requirementRouter = Router();

// import {protectForEmployee} from '../middleware/authMiddleware.js'

// Routes
requirementRouter.route('/').get(getAllRequirements).post(setRequirement);
requirementRouter.route('/:id').patch(updateRequirement).delete(deleteRequirement);
requirementRouter.route('/getSingleRequirement/:id').get(getSingleRequirement);

// requirementRouter.route('/').get(getAllRequirements).post(protectForEmployee, setRequirement);
// requirementRouter.route('/:id').patch(protectForEmployee, updateRequirement).delete(protectForEmployee, deleteRequirement);
// requirementRouter.route('/:id').patch(protectForEmployee, updateRequirement).delete(protectForEmployee, deleteRequirement);
// requirementRouter.route('/getSingleRequirement/:id').get(protectForEmployee, getSingleRequirement);

// Export
export default requirementRouter