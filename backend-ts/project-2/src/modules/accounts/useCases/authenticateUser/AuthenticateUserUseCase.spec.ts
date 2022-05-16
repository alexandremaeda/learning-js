import AppError from '@errors/AppError';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import UsersRepositoryInMemory from '../../repositories/inMemory/UsersRepositoryInMemory';
import CreateUserUseCase from '../createUser/CreateUserUseCase';
import AuthenticateUserUseCase from './AuthenticateUserUseCase';

let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe('User Authenticate', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      name: 'Test',
      email: 'test@jest.com',
      password: '123456',
      driver_license: '2323ddd',
    };

    const createdUser = await createUserUseCase.execute(user);

    const authenticateUserInfo = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(authenticateUserInfo).toHaveProperty('token');
  });

  it('should not be able to authenticate an noneexistent user', async () => {
    expect(async () => {
      const authenticateUserInfo = await authenticateUserUseCase.execute({
        email: 'false@jest.com',
        password: 'null',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate an user with wrong password', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: 'Test',
        email: 'test@jest.com',
        password: '123456',
        driver_license: '2323ddd',
      };

      const createdUser = await createUserUseCase.execute(user);

      const authenticateUserInfo = await authenticateUserUseCase.execute({
        email: user.email,
        password: 'wrongPassWord',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
