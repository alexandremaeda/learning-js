import Specification from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationsUseCase {
  constructor(private especificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const found = this.especificationsRepository.list();

    return found;
  }
}

export default ListSpecificationsUseCase;
