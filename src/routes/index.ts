import { Router } from 'express';

import appoitmentsRouter from './appointments.routes';
import userRouter from './users.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/appointments', appoitmentsRouter);
routes.use('/user', userRouter);
routes.use('/sessions', sessionsRoutes);

export default routes;
