import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';
import ImportCategoriesCaseUse from './ImportCategoriesCaseUse';
import ImportCategoriesController from './ImportCategoriesController';

const categoriesRepository = new CategoriesRepository();
const importCategoriesCaseUse = new ImportCategoriesCaseUse(
  categoriesRepository,
);
const importCategoriesController = new ImportCategoriesController(
  importCategoriesCaseUse,
);

export default importCategoriesController;
