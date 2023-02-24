import dotenv from "dotenv";
dotenv.config();

import express, {
  Application,
  Request,
  Response,
  NextFunction,
} from "express";
// import { pool } from "./db";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app: Application = express();

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const data = await prisma.user.findMany();
  return res.json(data);
});
app.get("/add", async (req: Request, res: Response, next: NextFunction) => {
  const data = await prisma.user.create({
    data:{
        name:"jui",
        email:"jui@gmail.com"
    }
  });
  return res.json(data);
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`auth server is running on ${PORT}`));
