import Specification from '../../entities/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

import AppDataSource from '@database';

import { Repository } from 'typeorm';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const category = await this.repository.create({ name, description });

    await this.repository.save(category);

    return category;
  }

  list(): Promise<Specification[]> {
    return this.repository.find();
  }

  findByName(name: string): Promise<Specification | null> {
    return this.repository.findOneBy({ name });
  }
}

export default SpecificationsRepository;
