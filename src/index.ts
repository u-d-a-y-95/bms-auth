import dotenv from "dotenv";
dotenv.config();

import express, { Application, Request, Response, NextFunction, json } from "express";
import { mq } from "./mq";
import { rootRouter } from "./routes/rootRoute";




const app: Application = express();
mq.connect()
app.use(json())
app.use('/', rootRouter)

app.get("/tes", async (req: Request, res: Response, next: NextFunction) => {
  return res.json("api is running good");
});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`auth server is running on ${PORT}`));
