import { Request, Response } from 'express';

import ListCategoryUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const found = await this.listCategoryUseCase.execute();
    return res.json(found);
  }
}

export default ListCategoriesController;
