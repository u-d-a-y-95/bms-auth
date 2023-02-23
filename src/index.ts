import express, { Application,Request,Response,NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.get("/",(req:Request,res:Response,next:NextFunction)=> res.json("bms auth service"))

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`auth server is running on ${PORT}`));
