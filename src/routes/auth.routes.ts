import AuthController from "@/controllers/auth.controller";
import { ApiHelperUtils } from "@/utils/api-helper.utils";
import { Router } from "express";

const authRouter = Router();

ApiHelperUtils.registerControllers(authRouter, [AuthController])

export default authRouter;