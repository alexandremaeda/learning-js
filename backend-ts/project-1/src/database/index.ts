// import { createConnection } from 'typeorm';

// createConnection();

import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then((a, b, c) => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
