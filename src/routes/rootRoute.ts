import express, { Request, Response, Router } from "express";
import { userRoute } from "./user";

export const rootRouter: Router = express.Router();

rootRouter.post("/login", (req: Request, res: Response) => {});
rootRouter.use("/user", userRoute);
