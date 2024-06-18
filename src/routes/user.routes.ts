import SchedulesController from "@/api/user/schedules.controller";
import { ApiHelperUtils } from "@/utils/api-helper.utils";
import { Router } from "express";

const userRouter = Router();

ApiHelperUtils.registerControllers(userRouter, [SchedulesController]);

export default userRouter;