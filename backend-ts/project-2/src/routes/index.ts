import { Router } from 'express';
import homeRouter from '../routes/home.routes';
import categoriesRouter from '../routes/categories.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/categories', categoriesRouter);

export default routes;
