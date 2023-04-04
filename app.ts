import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";

import connectDB from "./config/db";
import moviesRouter from "./routes/moviesRoutes";

const app = express();

const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;

app.use("/movies", moviesRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express");
});
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port`);
});
