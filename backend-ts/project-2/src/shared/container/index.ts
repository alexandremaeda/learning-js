import { container } from 'tsyringe';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';

import SpecificationsRepository from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

import UsersRepository from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';

import IUsersTokensRepository from '@modules/accounts/repositories/IUsersTokensRepository';
import UsersTokensRepository from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';

import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import CarsRepository from '@modules/cars/infra/typeorm/repositories/CarsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);
