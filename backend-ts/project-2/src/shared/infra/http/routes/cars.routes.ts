import { Router } from 'express';

import ListCarsController from '@modules/cars/useCases/listCars/ListCarsController';
import CreateCarController from '@modules/cars/useCases/createCar/CreateCarController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import ensureAdmin from '../middlewares/ensureAdmin';

const carsRouter = Router();

const listCarsController = new ListCarsController();
const createCarController = new CreateCarController();

carsRouter.get('/', listCarsController.handle);

carsRouter.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

export default carsRouter;
