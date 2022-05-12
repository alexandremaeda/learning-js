import { Router } from 'express';
import appointmentsRouter from '../routes/appointments.routes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Nice!' });
});

routes.use('/appointments', appointmentsRouter);

export default routes;
