import express, { Application, Request, Response } from "express";
import cors from "cors";

import router from "./route/route";
import globalErrorHandler from "./Middlewares/globalErrorHandler";
import notFound from "./Middlewares/notFound";
const app: Application = express();

const corsOptions = {
  origin: "https://bikemanagement.netlify.app",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use(globalErrorHandler);
app.use(notFound);

app.options("*", cors());

export default app;
