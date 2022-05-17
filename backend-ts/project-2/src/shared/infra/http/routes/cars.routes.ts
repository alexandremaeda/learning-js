import { Router } from 'express';

import ListCarsController from '@modules/cars/useCases/listCars/ListCarsController';

const carsRouter = Router();

const listCarsController = new ListCarsController();

carsRouter.get('/', listCarsController.handle);

export default carsRouter;
