import express, { Request, Response, Router } from "express";
import { login } from "../controllers/auth";
import { userRoute } from "./user";

export const rootRouter: Router = express.Router();

rootRouter.post("/login", login);
rootRouter.use("/user", userRoute);
