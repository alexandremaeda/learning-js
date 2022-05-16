import { inject, injectable } from 'tsyringe';
import UsersRepository from '../../repositories/implementations/UsersRepository';

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
export default class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async execute({ user_id, avatar_file }: IRequest) {
    const foundUser = await this.usersRepository.findById(user_id);

    foundUser.avatar = avatar_file;

    return this.usersRepository.create(foundUser);
  }
}
