import { Request, Response } from 'express';

import ImportCategoriesUseCase from './ImportCategoriesCaseUse';

class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const { file } = req;

    // console.log(file);
    this.importCategoriesUseCase.execute(file);

    return res.send();
  }
}

export default ImportCategoriesController;
