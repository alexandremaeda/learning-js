import AppError from '../../../../errors/AppError';
import CategoriesRepositoryInMemory from '../../repositories/inMemory/CategoriesRepositoryInMemory';
import CreateCategoryUseCase from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory,
    );
  });

  it('should be able to create a new category', async () => {
    const createdCategory = await createCategoryUseCase.execute({
      name: 'Category test',
      description: 'This is a Test description',
    });

    expect(createdCategory).toHaveProperty('id');
  });

  it('should not be able to create a new category with same name', async () => {
    expect(async () => {
      const category = {
        name: 'Category test',
        description: 'This is a Test description',
      };

      const createdCategory = await createCategoryUseCase.execute(category);

      const duplicatedCreatedCategory = await createCategoryUseCase.execute(
        category,
      );
    }).rejects.toBeInstanceOf(AppError);
  });
});
