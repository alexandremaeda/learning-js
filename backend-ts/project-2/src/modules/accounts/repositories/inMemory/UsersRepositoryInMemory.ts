import ICreateuserDTO from '../../dtos/ICreateUserDTO';
import User from '../../infra/typeorm/entities/User';
import IUsersRepository from '../IUsersRepository';

export default class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    password,
    email,
    driver_license,
  }: ICreateuserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { name, password, email, driver_license });

    this.users.push(user);

    return user;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }
}
