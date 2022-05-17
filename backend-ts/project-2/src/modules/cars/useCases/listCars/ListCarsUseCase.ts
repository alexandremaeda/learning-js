import Car from '@modules/cars/infra/typeorm/entities/Car';
import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class ListCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  execute(): Promise<Car[]> {
    return this.carsRepository.list();
  }
}
