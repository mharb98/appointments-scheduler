import express from 'express';
import 'reflect-metadata';
import adminRouter from './routes/admin.routes';
import userRouter from './routes/user.routes';
import { EnvironmentVariables } from './environment-vars';
import dotenv from 'dotenv';
import authMiddleware from './middlewares/auth.middleware';
import initAuth from './auth/passport.auth';
import authRouter from './routes/auth.routes';
import rolesMiddleware from './middlewares/roles.middleware';
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerConfig from './config/swagger.config';
import { initDb } from './database';

dotenv.config();

const app = express();

initAuth();
initDb();

app.use(express.json());

const swaggerSpecs = swaggerJsdoc(swaggerConfig);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpecs, {explorer: true})
)


app.use('/admin', authMiddleware, rolesMiddleware, adminRouter);
app.use('/user', authMiddleware, rolesMiddleware, userRouter);
app.use(authRouter);

app.listen(EnvironmentVariables.PORT_NUMBER, () => {
    console.log(`Server is running on port ${EnvironmentVariables.PORT_NUMBER}`);
})
