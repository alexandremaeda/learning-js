import { inject, injectable } from 'tsyringe';
import Category from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const found = await this.categoriesRepository.list();

    return found;
  }
}

export default ListCategoriesUseCase;
