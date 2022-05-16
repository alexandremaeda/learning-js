import { Router } from 'express';

import AuthenticateUserControlle from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const usersRouter = Router();

const authenticateUserControlle = new AuthenticateUserControlle();

usersRouter.post('/sessions', authenticateUserControlle.handle);

export default usersRouter;
