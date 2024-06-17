import express from 'express';
import 'reflect-metadata';
import adminRouter from './routes/admin.routes';
import userRouter from './routes/user.routes';
import { EnvironmentVariables } from './environment-vars';
import dotenv from 'dotenv';
import authMiddleware from './middlewares/auth.middleware';
import initAuth from './auth/passport.auth';
import authRouter from './routes/auth.routes';

dotenv.config();

const app = express();

initAuth();

app.use(express.json());

app.use('/admin', authMiddleware, adminRouter);
app.use('/user', authMiddleware, userRouter);
app.use(authRouter);

app.listen(EnvironmentVariables.PORT_NUMBER, () => {
    console.log(`Server is running on port ${EnvironmentVariables.PORT_NUMBER}`);
})
