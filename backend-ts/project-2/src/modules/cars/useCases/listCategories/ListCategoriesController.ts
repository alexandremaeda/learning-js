import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCategoryUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase);

    const found = await listCategoryUseCase.execute();

    return res.json(found);
  }
}

export default ListCategoriesController;
