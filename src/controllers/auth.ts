import { Request, Response } from "express";
import { getOne } from "../services/user";
import { compareHash } from "../utils/bcrypt";
import { generateJwtToken } from "../utils/jwt";

export const login = async (req: Request, res: Response) => {
  const { mobile, password } = req.body;
  const user = await getOne(mobile);
  if (!user) return res.status(400).json("unauthentic");
//   const isMatch = await compareHash(password, user.password);
//   if (!isMatch) return res.status(400).json("unauthentic");
  const { password: _password, ...rest } = user;
  const token = await generateJwtToken(rest);
  return res.json({
    user: rest,
    token,
  });
};
