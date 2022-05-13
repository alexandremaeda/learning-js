import { Request, Response } from 'express';

import ListSpecificationsCaseUse from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private listSpecificationsCaseUse: ListSpecificationsCaseUse) {}

  handle(req: Request, res: Response): Response {
    const found = this.listSpecificationsCaseUse.execute();

    return res.json(found);
  }
}

export default ListSpecificationsController;
