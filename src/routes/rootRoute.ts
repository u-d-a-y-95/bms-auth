import express, { Router } from "express";
import { login, tokenValidate } from "../controllers/auth";
import { userRoute } from "./user";

export const rootRouter: Router = express.Router();

rootRouter.post("/login", login);
rootRouter.get("/validate", tokenValidate);
rootRouter.use("/user", userRoute);
