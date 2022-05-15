import { Router } from 'express';
import multer from 'multer';

import CreateCategoryController from '../modules/cars/useCases/createCategory/CreateCategoryController';
import ListCategoriesController from '../modules/cars/useCases/listCategories/ListCategoriesController';
import ImportCategoriesController from '../modules/cars/useCases/importCategories/ImportCategoriesController';

const categoriesRouter = Router();
const upload = multer({
  dest: './tmp',
});

const listCategoriesController = new ListCategoriesController();
const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoriesController();

categoriesRouter.get('/', listCategoriesController.handle);

categoriesRouter.post('/', createCategoryController.handle);

categoriesRouter.post(
  '/import',
  upload.single('file'),
  importCategoriesController.handle,
);

export default categoriesRouter;
