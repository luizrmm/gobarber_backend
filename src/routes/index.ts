import { Router } from 'express';

import appoitmentsRouter from './appointments.routes';
import userRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appoitmentsRouter);
routes.use('/user', userRouter);

export default routes;
