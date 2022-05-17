import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListCarsUseCase from './ListCarsUseCase';

export default class ListCarsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCarsUseCase = container.resolve(ListCarsUseCase);

    const found = await listCarsUseCase.execute();

    return res.json(found);
  }
}
