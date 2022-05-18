import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import IUsersTokensRepository from '@modules/accounts/repositories/IUsersTokensRepository';
import auth from '@config/auth';
import dayjs from 'dayjs';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  refresh_token: string;
  user: {
    name: string;
    email: string;
  };
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const {
      secret_token,
      expires_in_token,
      secret_refresh_token,
      expires_in_refresh_token,
      expires_refresh_token_days,
    } = auth;

    const foundUser = await this.usersRepository.findByEmail(email);

    if (!foundUser) throw new AppError('Email or password incorrect');

    const passwordMatch = await compare(password, foundUser.password);

    if (!passwordMatch) throw new AppError('Email or password incorrect');

    const token = sign(
      { name: foundUser.name, email: foundUser.email },
      secret_token,
      { subject: foundUser.id, expiresIn: expires_in_token },
    );

    const refresh_token = sign(
      { email: foundUser.email },
      secret_refresh_token,
      { subject: foundUser.id, expiresIn: expires_in_refresh_token },
    );

    await this.usersTokensRepository.create({
      user_id: foundUser.id,
      expires_date: dayjs().add(expires_refresh_token_days, 'days').toDate(),
      refresh_token,
    });

    return {
      token,
      refresh_token,
      user: { name: foundUser.name, email: foundUser.email },
    };
  }
}

export default AuthenticateUserUseCase;
