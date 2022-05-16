import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserUseCase from './CreateUserUseCase';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, password, email, driver_license } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const created = await createUserUseCase.execute({
      name,
      password,
      email,
      driver_license,
    });

    return res.status(201).json(created);
  }
}

export default CreateUserController;
