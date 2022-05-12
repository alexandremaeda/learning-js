import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppDataSource from '../database/index';

import Appointment from '../models/Appointment';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (req, res) => {
  const appointmentsRepository = AppDataSource.getRepository(Appointment);
  const founds = await appointmentsRepository.find();

  return res.json(founds);
});
appointmentsRouter.post('/', async (req, res) => {
  try {
    const { provider, date } = req.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return res.json(appointment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
