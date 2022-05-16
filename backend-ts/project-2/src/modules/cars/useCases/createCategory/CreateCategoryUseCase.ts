import Category from '../../infra/typeorm/entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const found = await this.categoriesRepository.findByName(name);

    if (found) throw new AppError('Category already exists!');

    const created = await this.categoriesRepository.create({
      name,
      description,
    });

    return created;
  }
}

export default CreateCategoryUseCase;
