import { Router, Request, Response } from 'express';

import createSpecification from '../modules/cars/useCases/createSpecification';
import listSpecifications from '../modules/cars/useCases/listSpecifications';

const categoriesRouter = Router();

categoriesRouter.get('/', async (req: Request, res: Response) => {
  return listSpecifications.handle(req, res);
});

categoriesRouter.post('/', async (req: Request, res: Response) => {
  return createSpecification.handle(req, res);
});

export default categoriesRouter;
