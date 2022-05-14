import { Request, Response } from 'express';

import CreateCategoryUseCase from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const created = await this.createCategoryUseCase.execute({
      name,
      description,
    });

    return res.status(201).json(created);
  }
}

export default CreateCategoryController;
