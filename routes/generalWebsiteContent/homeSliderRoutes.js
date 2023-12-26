import { Router } from 'express';

import { getAllHomeSliders, setHomeSlider, updateHomeSlider, deleteHomeSlider, getSingleHomeSlider } from '../../controllers/generalWebsiteContent/homeSliderController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const homeSliderRoutes = Router();

// Routes
homeSliderRoutes.route('/').get(getAllHomeSliders).post(protectForEmployee, setHomeSlider);
homeSliderRoutes.route('/:id').patch(protectForEmployee, updateHomeSlider).delete(protectForEmployee, deleteHomeSlider);
homeSliderRoutes.route('/getSingleHomeSlider/:id').get(getSingleHomeSlider);

// Export
export default homeSliderRoutes;