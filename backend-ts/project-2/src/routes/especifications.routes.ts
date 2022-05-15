import { Router } from 'express';

import ListSpecificationsController from '../modules/cars/useCases/listSpecifications/ListSpecificationsController';
import CreateSpecificationController from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const categoriesRouter = Router();

const listSpecificationsController = new ListSpecificationsController();
const createSpecificationController = new CreateSpecificationController();

categoriesRouter.get('/', listSpecificationsController.handle);

categoriesRouter.post('/', createSpecificationController.handle);

export default categoriesRouter;
