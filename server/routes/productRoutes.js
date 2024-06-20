import express from "express";
import { isAuth } from "../middlewares/authMiddlewares.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  addProductController,
  deleteProductController,
  deleteProductImageController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
  updateProductImageController,
} from "../controllers/productController.js";
const router = express.Router();

router.get("/getAllProducts", getAllProductsController);

router.get("/:id", getProductByIdController);

router.post("/addProduct", isAuth, singleUpload, addProductController);

router.put("/:id", isAuth, updateProductController);

router.put(
  "/producImage/:id",
  isAuth,
  singleUpload,
  updateProductImageController
);

router.delete("/deleteImage/:id", isAuth, deleteProductImageController);

router.delete("/:id", isAuth, deleteProductController);

export default router;
