import { inject, injectable } from 'tsyringe';
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
    const created = await this.usersRepository.create({
      name,
      password,
      email,
      driver_license,
    });

    return created;
  }
}

export default CreateUserUseCase;
