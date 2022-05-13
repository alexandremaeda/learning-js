import express from 'express';
import swaggerUi from 'swagger-ui-express';

import routes from './routes';
import swaggerFile from './swagger.json';

const port = 3333;
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.listen(port, () => {
  console.log(`Server started on port ${port} 👌`);
});
