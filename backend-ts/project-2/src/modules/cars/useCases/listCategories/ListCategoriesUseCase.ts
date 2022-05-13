import Category from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const found = this.categoriesRepository.list();

    return found;
  }
}

export default ListCategoriesUseCase;
