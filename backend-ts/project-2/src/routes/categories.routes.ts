import { Router, Request, Response } from 'express';

import CategoriesRepository from '../repositories/CategoriesRepository';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRouter.get('/', async (req: Request, res: Response) => {
  return res.json(categoriesRepository.list());
});

categoriesRouter.post('/', async (req: Request, res: Response) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  const created = createCategoryService.execute({ name, description });

  return res.status(201).json(created);
});

export default categoriesRouter;
