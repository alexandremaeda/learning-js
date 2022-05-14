import Specification from '../entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Specification | null;
  list(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
