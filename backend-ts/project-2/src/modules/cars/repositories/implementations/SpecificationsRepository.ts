import Specification from '../../models/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE)
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();

    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const especification = new Specification({
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(especification);

    return especification;
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification | null {
    const especification = this.specifications.find(
      (especification) => especification.name === name,
    );
    return especification || null;
  }
}

export default SpecificationsRepository;
