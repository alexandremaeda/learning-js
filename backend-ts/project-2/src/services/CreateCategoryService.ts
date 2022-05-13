import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryServices {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest) {
    const found = this.categoriesRepository.findByName(name);

    if (found) throw new Error('Category already exists!');

    const created = this.categoriesRepository.create({ name, description });

    return created;
  }
}

export default CreateCategoryServices;
