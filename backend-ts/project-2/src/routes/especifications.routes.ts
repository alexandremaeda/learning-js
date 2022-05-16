import { Router } from 'express';

import ListSpecificationsController from '../modules/cars/useCases/listSpecifications/ListSpecificationsController';
import CreateSpecificationController from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specificationsRouter = Router();

const listSpecificationsController = new ListSpecificationsController();
const createSpecificationController = new CreateSpecificationController();

specificationsRouter.use(ensureAuthenticated);
specificationsRouter.get('/', listSpecificationsController.handle);
specificationsRouter.post('/', createSpecificationController.handle);

export default specificationsRouter;
