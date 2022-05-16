import { Router, Request, Response } from 'express';

const homeRouter = Router();

homeRouter.get('/', async (req: Request, res: Response) => {
  return res.json({message: "API Project 2 is answering 👍"});
});


export default homeRouter;
