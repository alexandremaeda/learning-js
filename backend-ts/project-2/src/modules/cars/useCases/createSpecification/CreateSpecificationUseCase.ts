import Specification from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateEspecificationUsecase {
  constructor(
    @inject('SpecificationsRepository')
    private especificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<Specification> {
    const found = await this.especificationsRepository.findByName(name);

    if (found) throw new Error('Especification already exists!');

    const created = await this.especificationsRepository.create({
      name,
      description,
    });

    return created;
  }
}

export default CreateEspecificationUsecase;
