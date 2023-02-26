import express, { Router } from "express";
import { addUser, getUsers } from "../controllers/user";
export const userRoute: Router = express.Router();

userRoute.get("/", getUsers);
userRoute.post("/add", addUser);
