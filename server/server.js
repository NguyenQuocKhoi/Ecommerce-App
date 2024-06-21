import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import testRoutes from "./routes/testRoutes.js";
import { connect } from "mongoose";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
dotenv.config();

connectDB();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
app.use("/api/v1", testRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/category", categoryRoutes);

app.get("/", (req, res) => {
  return res.status(200).send("<h1> Welcome to node server Ecommerce App</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `Server Running On PORT ${process.env.PORT} on ${process.env.NODE_ENV}`
      .bgMagenta.white
  );
});
