import { Router } from 'express';

import { getAllAppSettings, setAppSetting, updateAppSetting, deleteAppSetting } from '../../controllers/generalWebsiteContent/appSettingController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const appSettingRoutes = Router();

// Routes
appSettingRoutes.route('/').get(getAllAppSettings).post(protectForEmployee, setAppSetting);
appSettingRoutes.route('/:id').patch(protectForEmployee, updateAppSetting).delete(protectForEmployee, deleteAppSetting);

// Export
export default appSettingRoutes;