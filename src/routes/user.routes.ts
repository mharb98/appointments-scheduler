import { ApiHelperUtils } from "@/utils/api-helper.utils";
import { Router } from "express";

const userRouter = Router();

ApiHelperUtils.registerControllers(userRouter, []);

export default userRouter;