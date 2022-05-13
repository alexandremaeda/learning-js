import { Router } from 'express';
import homeRouter from '../routes/home.routes';
import categoriesRouter from '../routes/categories.routes';
import especificationsRouter from '../routes/especifications.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/categories', categoriesRouter);
routes.use('/specifications', especificationsRouter);

export default routes;
