import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@errors/AppError';
import UsersRepository from '@modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
  name: string;
  email: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError('Token missign', 401);

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      '43eef7ba0de84d4bc341421663484b8a',
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const foundUser = await usersRepository.findById(user_id);

    if (!foundUser) throw new AppError('User does not exist', 401);

    req.user = foundUser;

    return next();
  } catch (err) {
    throw new AppError('Invalid token', 401);
  }
}
