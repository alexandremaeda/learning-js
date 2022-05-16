import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../entities/User';
import UsersRepository from '../repositories/implementations/UsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error('User already exists');

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
