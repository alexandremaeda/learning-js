import { AppDataSource } from '../data-source';
import { v4 as uuidV4 } from 'uuid';
import { hash } from 'bcrypt';
import { DataSource } from 'typeorm';

const create = async () => {
  const id = uuidV4();
  const password = await hash('admin', 8);
  const query = `
    INSERT INTO users(id, name, email, password, driver_license, "isAdmin", created_at)
    VALUES('${id}', 'admin', 'admin@rentalx.com', '${password}', 'XYZ', true, now());
  `;

  AppDataSource.initialize()
    .then(async () => {
      console.log('Data Source has been initialized!');
      await AppDataSource.query(query);
      await AppDataSource.destroy();
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err);
    });
};

create()
  .then(() => console.log('Admin created.'))
  .catch((err) => console.error(err));
