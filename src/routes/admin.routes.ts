import AdminAppointmentsController from '@/api/admin/admin.schedules/admin.appointments.controller';
import { ApiHelperUtils } from '@/utils/api-helper.utils';
import {Router} from 'express';

const adminRouter = Router();

ApiHelperUtils.registerControllers(adminRouter, [AdminAppointmentsController]);

export default adminRouter;
