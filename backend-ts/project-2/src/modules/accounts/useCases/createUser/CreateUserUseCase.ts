import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';

import ICreateUserDTO from '@modules/accounts/dtos/ICreateUserDTO';
import User from '@modules/accounts/infra/typeorm/entities/User';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new AppError('User already exists');

    const passwordHash = await hash(password, 8);

    const created = await this.usersRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license,
    });

    return created;
  }
}

export default CreateUserUseCase;
