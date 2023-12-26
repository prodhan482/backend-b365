import { Router } from 'express';
import { getAllSocialLinks, setSocialLink, updateSocialLink, deleteSocialLink } from '../../controllers/generalWebsiteContent/socialLinkController.js';

const socialLinkRoutes = Router();

import {protectForEmployee} from '../../middleware/authMiddleware.js'

// Routes
socialLinkRoutes.route('/').get(getAllSocialLinks).post(protectForEmployee, setSocialLink);
socialLinkRoutes.route('/:id').patch(protectForEmployee, updateSocialLink).delete(protectForEmployee, deleteSocialLink);

// Export
export default socialLinkRoutes