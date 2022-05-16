import { DataSource } from 'typeorm';
//docker-compose exec app node --require ts-node/register ./node_modules/typeorm/cli.js migration:run -d src/database
//yarn typeorm migration:create src/database/migrations/CreateCategories
// docker run --name rentalx_database -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=ignite -e POSTGRES_DB=rentalx -p 5432:5432 -d postgres

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentalx',
  entities: [
    './src/modules/cars/entities/*.ts',
    './src/modules/accounts/entities/*.ts',
  ],
  migrations: ['src/database/migrations/*.ts'],
});
