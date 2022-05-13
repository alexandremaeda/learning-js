import Category from '../models/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category | null;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO };
