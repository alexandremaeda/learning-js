import AppError from '@shared/errors/AppError';
import CarsRepositoryInMemory from '../../repositories/inMemory/CarsRepositoryInMemory';
import CreateCarUseCase from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('should br create a new car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const createdCar = await createCarUseCase.execute({
      name: 'Sandero',
      description: 'Lorem Ipsum',
      daily_rate: 100.8,
      license_plate: 'LET-1234',
      fine_amount: 120,
      brand: 'Renault',
    });

    expect(createdCar).toHaveProperty('id');
  });

  it('should not be able to create a new car with license plate', async () => {
    expect(async () => {
      const car = {
        name: 'Sandero',
        description: 'Lorem Ipsum',
        daily_rate: 100.8,
        available: true,
        license_plate: 'LET-1234',
        fine_amount: 120,
        brand: 'Renault',
      };

      await createCarUseCase.execute(car);
      await createCarUseCase.execute(car);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a new car with available true', async () => {
    const createdCar = await createCarUseCase.execute({
      name: 'Sandero',
      description: 'Lorem Ipsum',
      daily_rate: 100.8,
      license_plate: 'LET-1234',
      fine_amount: 120,
      brand: 'Renault',
    });

    expect(createdCar.available).toBe(true);
  });
});
