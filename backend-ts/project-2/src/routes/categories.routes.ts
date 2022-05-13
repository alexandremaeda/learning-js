import { Router, Request, Response } from 'express';
import multer from 'multer';

import createCategoryController from '../modules/cars/useCases/createCategory';
import listCategoriesController from '../modules/cars/useCases/listCategories';
import importCategories from '../modules/cars/useCases/importCategories';

const categoriesRouter = Router();
const upload = multer({
  dest: './tmp',
});

categoriesRouter.get('/', async (req: Request, res: Response) => {
  return listCategoriesController.handle(req, res);
});

categoriesRouter.post('/', async (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});

categoriesRouter.post(
  '/import',
  upload.single('file'),
  async (req: Request, res: Response) => {
    return importCategories.handle(req, res);
  },
);

export default categoriesRouter;
