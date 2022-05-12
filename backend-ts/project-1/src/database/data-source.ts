import { DataSource } from 'typeorm';
import Appointment from '../models/Appointment';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'project_1',
  // entities: [Appointment],
  entities: ['./src/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
});
