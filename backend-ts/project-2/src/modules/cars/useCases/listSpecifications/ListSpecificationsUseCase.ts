import { inject, injectable } from 'tsyringe';
import Specification from '../../infra/typeorm/entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private especificationsRepository: ISpecificationsRepository,
  ) {}

  execute(): Promise<Specification[]> {
    return this.especificationsRepository.list();
  }
}

export default ListSpecificationsUseCase;
