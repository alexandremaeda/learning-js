import { v4 as uuidV4 } from 'uuid';

interface Specification {
  id?: string;
  name: String;
  description: String;
  created_at: Date;
}

class Specification {
  constructor({ name, description, created_at }: Specification) {
    if (!this.id) this.id = uuidV4();

    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }
}

export default Specification;
