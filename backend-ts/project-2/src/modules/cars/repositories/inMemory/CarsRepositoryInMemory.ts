import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';
import Car from '../../infra/typeorm/entities/Car';
import ICarsRepository from '../ICarsRepository';

export default class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async findByLicensePlate(license_plate: string): Promise<Car | null> {
    return this.cars.find((car) => car.license_plate === license_plate) || null;
  }

  async list(): Promise<Car[]> {
    return this.cars;
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
    const createdCar = new Car();

    Object.assign(createdCar, {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    this.cars.push(createdCar);

    return createdCar;
  }
}
