import { Router } from 'express';

import ListCarsController from '@modules/cars/useCases/listCars/ListCarsController';
import CreateCarController from '@modules/cars/useCases/createCar/CreateCarController';

const carsRouter = Router();

const listCarsController = new ListCarsController();
const createCarController = new CreateCarController();

carsRouter.get('/', listCarsController.handle);

carsRouter.post('/', createCarController.handle);

export default carsRouter;
