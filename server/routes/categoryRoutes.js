import express from "express";
import { isAuth } from "../middlewares/authMiddlewares.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  updateCategoryController,
} from "../controllers/categoryController.js";
const router = express.Router();

router.post("/create", isAuth, createCategoryController);

router.get("/getAll", getAllCategoriesController);

router.delete("/:id", isAuth, deleteCategoryController);

router.put("/:id", isAuth, updateCategoryController);
export default router;
