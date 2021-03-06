import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';
import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import AppDataSource from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import Car from '../entities/Car';

export default class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = await this.repository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    await this.repository.save(car);

    return car;
  }

  findByLicensePlate(license_plate: string): Promise<Car | null> {
    return this.repository.findOneBy({ license_plate });
  }

  list(): Promise<Car[]> {
    return this.repository.find();
  }
}
