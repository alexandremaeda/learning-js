import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import AppDataSource from '@shared/infra/typeorm';

import '../../container';

import routes from './routes';
import swaggerFile from '../../../swagger.json';
import AppError from '@shared/errors/AppError';

const port = 3333;

AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');

    await AppDataSource.runMigrations();

    const app = express();

    app.use(express.json());

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.use(routes);

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message });
      }

      return res
        .status(500)
        .json({ status: 500, message: `internal server error ${err.message}` });
    });

    app.listen(port, () => {
      console.log(`Server started on port ${port} 👌`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
