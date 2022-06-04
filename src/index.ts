import "dotenv/config";

import userRouter from "./routes/userRouter.js";

import adminRouter from "./routes/adminRouter.js";

import express from "express";

const app: express.express = express();

app.use(express.json());

app.use("/usuario", userRouter);

app.use("/admin", adminRouter);

app.listen(process.env.NODE_ENV_SERVER_PORT, (): void => {
  console.log("Server running");
});