import express, { Router } from 'express';
import 'reflect-metadata';
import adminRouter from './routes/admin.routes';
import userRouter from './routes/user.routes';
import { EnvironmentVariables } from './environment-vars';

const app = express();

app.use(express.json());
app.use('/admin', adminRouter);
app.use('/user', userRouter);

app.listen(EnvironmentVariables.PORT_NUMBER, () => {
    console.log(`Server is running on port ${EnvironmentVariables.PORT_NUMBER}`);
})
