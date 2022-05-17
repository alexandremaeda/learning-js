import ICreateCarDTO from '@modules/cars/dtos/ICreateCar';
import AppDataSource from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import Car from '../entities/Car';

export default class CarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }

  async create({ name, description }: ICreateCarDTO): Promise<Car> {
    const category = await this.repository.create({ name, description });

    await this.repository.save(category);

    return category;
  }

  list(): Promise<Car[]> {
    return this.repository.find();
  }
}
