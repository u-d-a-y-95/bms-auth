import dotenv from "dotenv";
dotenv.config();

import express, { Application, Request, Response, NextFunction, json } from "express";
import { mq } from "./mq";
import { rootRouter } from "./routes/rootRoute";




const app: Application = express();
mq.connect()
app.use(json())
app.use('/', rootRouter)

app.get("/health", async (req: Request, res: Response, next: NextFunction) => {
  return res.sendStatus(200).send("ok");
});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`auth server is running on ${PORT}`));
