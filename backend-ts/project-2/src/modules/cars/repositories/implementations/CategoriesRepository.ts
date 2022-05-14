import Category from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

import AppDataSource from '../../../../database';
import { Repository } from 'typeorm';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = await this.repository.create({ name, description });

    await this.repository.save(category);

    return category;
  }

  list(): Promise<Category[]> {
    return this.repository.find();
  }

  findByName(name: string): Promise<Category | null> {
    return this.repository.findOneBy({ name });
  }
}

export default CategoriesRepository;
