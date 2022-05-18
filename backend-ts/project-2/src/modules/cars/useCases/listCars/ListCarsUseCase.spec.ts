import AppError from '@shared/errors/AppError';
import CarsRepositoryInMemory from '../../repositories/inMemory/CarsRepositoryInMemory';
import CreateCarUseCase from '../createCar/CreateCarUseCase';
import ListCarsUseCase from './ListCarsUseCase';

let createCarUseCase: CreateCarUseCase;
let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it('should be able to list all cars', async () => {
    const createdCar = await createCarUseCase.execute({
      name: 'Sandero',
      description: 'Lorem Ipsum',
      daily_rate: 100.8,
      license_plate: 'LET-1234',
      fine_amount: 120,
      brand: 'Renault',
    });

    const foundCars = await listCarsUseCase.execute();

    expect(foundCars).toEqual([createdCar]);
  });
});
