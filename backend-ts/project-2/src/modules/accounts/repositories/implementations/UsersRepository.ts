import { Repository } from 'typeorm';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../entities/User';
import IUsersRepository from '../IUsersRepository';
import AppDataSource from '../../../../database';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
    });

    return this.repository.save(user);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }
}

export default UsersRepository;
