import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const foundUser = await this.usersRepository.findByEmail(email);

    if (!foundUser) throw new AppError('Email or password incorrect');

    const passwordMatch = await compare(password, foundUser.password);

    if (!passwordMatch) throw new AppError('Email or password incorrect');

    const token = sign(
      { name: foundUser.name, email: foundUser.email },
      '43eef7ba0de84d4bc341421663484b8a',
      { subject: foundUser.id, expiresIn: '1d' },
    );

    return { user: { name: foundUser.name, email: foundUser.email }, token };
  }
}

export default AuthenticateUserUseCase;
