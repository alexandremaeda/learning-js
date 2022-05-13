import { Request, Response } from 'express';

import ListCategoryUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const found = this.listCategoryUseCase.execute();
    return res.json(found);
  }
}

export default ListCategoriesController;
