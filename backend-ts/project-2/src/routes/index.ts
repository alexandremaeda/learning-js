import { Router } from 'express';
import homeRouter from '../routes/home.routes';
import categoriesRouter from '../routes/categories.routes';
import especificationsRouter from '../routes/especifications.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/categories', categoriesRouter);
routes.use('/specifications', especificationsRouter);
routes.use('/users', usersRouter);

export default routes;
