import Category from '../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category({
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);

    return category;
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | null {
    const category = this.categories.find((category) => category.name === name);
    return category || null;
  }
}

export default CategoriesRepository;
