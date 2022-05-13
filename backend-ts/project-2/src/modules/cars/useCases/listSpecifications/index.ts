import SpecificationsRepository from '../../repositories/implementations/SpecificationsRepository';
import ListSpecificationsCaseUse from './ListSpecificationsUseCase';
import ListSpecificationsController from './ListSpecificationsController';

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationCaseUse = new ListSpecificationsCaseUse(
  specificationsRepository,
);
const listSpecificationController = new ListSpecificationsController(
  listSpecificationCaseUse,
);

export default listSpecificationController;
