import express from "express";
import { isAuth } from "../middlewares/authMiddlewares.js";
import { singleUpload } from "../middlewares/multer.js";
import { createOrderController } from "../controllers/orderController.js";

const router  = express.Router();

router.post("/create", isAuth, createOrderController)

export default router;
