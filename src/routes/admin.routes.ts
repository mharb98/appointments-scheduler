
import AdminSchedulesController from '@/controllers/admin/admin.schedules.controller';
import { ApiHelperUtils } from '@/utils/api-helper.utils';
import {Router} from 'express';

const adminRouter = Router();

ApiHelperUtils.registerControllers(adminRouter, [AdminSchedulesController]);

export default adminRouter;
