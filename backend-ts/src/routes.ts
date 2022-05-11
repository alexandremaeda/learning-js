import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: "ale.b.naeda@gmail.com",
    password: "123456",
    techs: [
      "Nodejs",
      "Reactjs",
      "React Native",
      { title: "Nodejs", experience: 8 },
    ],
  });

  return res.json({ message: "Hellow World", user });
}
