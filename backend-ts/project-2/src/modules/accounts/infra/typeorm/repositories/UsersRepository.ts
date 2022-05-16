import AppDataSource from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import User from '../entities/User';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    id,
    name,
    password,
    email,
    driver_license,
    avatar,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      id,
      name,
      password,
      email,
      driver_license,
      avatar,
    });

    return this.repository.save(user);
  }

  findById(id: string): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }
}

export default UsersRepository;
