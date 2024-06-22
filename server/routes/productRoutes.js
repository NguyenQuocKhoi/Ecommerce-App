import express from "express";
import { isAdmin, isAuth } from "../middlewares/authMiddlewares.js";
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

router.post("/addProduct", isAuth, isAdmin, singleUpload, addProductController);

router.put("/:id", isAuth, isAdmin, updateProductController);

router.put(
  "/producImage/:id",
  isAuth,
  isAdmin,
  singleUpload,
  updateProductImageController
);

router.delete(
  "/deleteImage/:id",
  isAuth,
  isAdmin,
  deleteProductImageController
);

router.delete("/:id", isAuth, isAdmin, deleteProductController);

export default router;
