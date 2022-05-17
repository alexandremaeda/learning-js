import ICreateCarDTO from '../dtos/ICreateCar';
import Car from '../infra/typeorm/entities/Car';

export default interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  list(): Promise<Car[]>;
}
