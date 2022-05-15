import express from 'express';
import swaggerUi from 'swagger-ui-express';

import AppDataSource from './database';

import './shared/container';

import routes from './routes';
import swaggerFile from './swagger.json';

const port = 3333;

AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');

    await AppDataSource.runMigrations();

    const app = express();

    app.use(express.json());

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.use(routes);

    app.listen(port, () => {
      console.log(`Server started on port ${port} 👌`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
