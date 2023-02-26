import { User } from "@prisma/client";
import { Response, Request } from "express";
import { add, getAll } from "../services/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAll();
  return res.json(users);
};
export const addUser = async (req: Request, res: Response) => {
  const user: User = req.body;
  const newUser = await add(user);
  return res.json(newUser);
};
