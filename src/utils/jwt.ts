import jwt from "jsonwebtoken";

export const generateJwtToken = (payload: any) =>
  jwt.sign(payload, String(process.env.JWT_SECRET));
