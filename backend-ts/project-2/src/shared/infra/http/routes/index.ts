import { Router } from 'express';
import homeRouter from './home.routes';
import authenticateRouter from './authenticate.routes';
import categoriesRouter from './categories.routes';
import especificationsRouter from './especifications.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use(authenticateRouter);
routes.use('/categories', categoriesRouter);
routes.use('/specifications', especificationsRouter);
routes.use('/users', usersRouter);

export default routes;
