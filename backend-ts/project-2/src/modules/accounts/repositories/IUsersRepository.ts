import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}

export default IUsersRepository;
