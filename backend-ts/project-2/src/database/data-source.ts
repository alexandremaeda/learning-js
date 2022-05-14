import 'reflect-metadata';
import { DataSource } from 'typeorm';
// import { User } from "../modules/accounts/entities/User";
// import { Category } from "../modules/cars/entities/Category";
// import { Specification } from "../modules/cars/entities/Specification";
//docker-compose exec app node --require ts-node/register ./node_modules/typeorm/cli.js migration:run -d src/database
//yarn typeorm migration:create src/database/migrations/CreateCategories

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database_ignite',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentalx',
  // entities: [Category, Specification, User],
  entities: ['./src/modules/cars/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
});
