import { Router } from 'express';

import CreateUserController from '../modules/accounts/useCases/createUser/CreateUserController';

const usersRouter = Router();

const createSpecificationController = new CreateUserController();

usersRouter.post('/', createSpecificationController.handle);

export default usersRouter;