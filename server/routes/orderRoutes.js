import express from "express";
import { isAdmin, isAuth } from "../middlewares/authMiddlewares.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  changeOrderStausController,
  createOrderController,
  getAllOrdersByUserController,
  getAllOrdersController,
  getOrderDetailController,
  paymentSController,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/create", isAuth, createOrderController);

router.get("/myOrders", isAuth, getAllOrdersByUserController);

router.get("/getMyOrder/:id", isAuth, getOrderDetailController);

router.post("/payment", isAuth, paymentSController);

router.get("/admin/getAllOrder", isAuth, isAdmin, getAllOrdersController);

router.put("/admin/order/:id", isAuth, isAdmin, changeOrderStausController);
export default router;
