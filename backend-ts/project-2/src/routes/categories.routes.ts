import { Router, Request, Response } from 'express';

import createCategoryController from '../modules/cars/useCases/createCategory';
import listCategoriesController from '../modules/cars/useCases/listCategories';

const categoriesRouter = Router();

categoriesRouter.get('/', async (req: Request, res: Response) => {
  return listCategoriesController.handle(req, res);
});

categoriesRouter.post('/', async (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});

export default categoriesRouter;
