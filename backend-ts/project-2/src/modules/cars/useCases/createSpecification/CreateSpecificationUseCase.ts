import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateEspecificationUsecase {
  constructor(private especificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    const found = this.especificationsRepository.findByName(name);

    if (found) throw new Error('Especification already exists!');

    const created = this.especificationsRepository.create({
      name,
      description,
    });

    return created;
  }
}

export default CreateEspecificationUsecase;
