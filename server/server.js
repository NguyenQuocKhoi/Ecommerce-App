import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import testRoutes from "./routes/testRoutes.js";
import { connect } from "mongoose";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1", testRoutes);
app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  return res.status(200).send("<h1> Welcome to node server Ecommerce App</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${process.env.PORT} on ${process.env.NODE_ENV}`.bgMagenta.white);
});
