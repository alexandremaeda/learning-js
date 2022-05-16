import { Router } from 'express';
import multer from 'multer';

import CreateUserController from '../modules/accounts/useCases/createUser/CreateUserController';
import UpdateUserAvatarController from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import uploadConfig from '../config/upload';

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const usersRouter = Router();

const createSpecificationController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post('/', createSpecificationController.handle);
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export default usersRouter;
