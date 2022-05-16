import Category from '../../infra/typeorm/entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

export default class CategoriesRepositoryInMemory
  implements ICategoriesRepository
{
  categories: Category[] = [];

  async findByName(name: string): Promise<Category | null> {
    return this.categories.find((category) => category.name === name) || null;
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const createdCategory = new Category();

    Object.assign(createdCategory, {
      name,
      description,
    });

    this.categories.push(createdCategory);

    return createdCategory;
  }
}
