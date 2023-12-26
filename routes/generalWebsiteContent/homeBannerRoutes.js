import { Router } from 'express';

import { getAllHomeBanners, setHomeBanner, updateHomeBanner, deleteHomeBanner, getSingleHomeBanner } from '../../controllers/generalWebsiteContent/homeBannerController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const homeBannerRoutes = Router();

// Routes
homeBannerRoutes.route('/').get(getAllHomeBanners).post(protectForEmployee, setHomeBanner);
homeBannerRoutes.route('/:id').patch(protectForEmployee, updateHomeBanner).delete(protectForEmployee, deleteHomeBanner);
homeBannerRoutes.route('/getSingleHomeBanner/:id').get(getSingleHomeBanner);

// Export
export default homeBannerRoutes;