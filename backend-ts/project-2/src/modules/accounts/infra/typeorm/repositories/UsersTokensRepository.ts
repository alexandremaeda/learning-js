import AppDataSource from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import IUsersTokensRepository from '@modules/accounts/repositories/IUsersTokensRepository';
import UserTokens from '../entities/UserTokens';
import ICreateUserTokenDTO from '@modules/accounts/dtos/ICreateUserTokenDTO';

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserTokens);
  }
  async create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      user_id,
      expires_date,
      refresh_token,
    });

    return this.repository.save(userToken);
  }
}

export default UsersTokensRepository;
