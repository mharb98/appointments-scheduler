import AppointmentsController from "@/api/user/appointments/appointments.controller";
import { ApiHelperUtils } from "@/utils/api-helper.utils";
import { Router } from "express";

const userRouter = Router();

ApiHelperUtils.registerControllers(userRouter, [AppointmentsController]);

export default userRouter;