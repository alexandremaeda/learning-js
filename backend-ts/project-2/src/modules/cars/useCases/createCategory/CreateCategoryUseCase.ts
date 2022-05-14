import Category from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const found = await this.categoriesRepository.findByName(name);

    if (found) throw new Error('Category already exists!');

    const created = await this.categoriesRepository.create({
      name,
      description,
    });

    return created;
  }
}

export default CreateCategoryUseCase;
