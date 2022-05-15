import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSpecificationsCaseUse from './ListSpecificationsUseCase';

class ListSpecificationsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listSpecificationsCaseUse = container.resolve(
      ListSpecificationsCaseUse,
    );

    const found = await listSpecificationsCaseUse.execute();

    return res.json(found);
  }
}

export default ListSpecificationsController;
