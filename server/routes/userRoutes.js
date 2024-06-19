import express from "express";
import {
  getUserProfileController,
  loginController,
  logoutController,
  registerController,
  updatePassword,
  updateProfileController,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/profile", isAuth, getUserProfileController);

router.get("/logout", isAuth, logoutController);

router.put("/updateProfile", isAuth, updateProfileController);

router.put("/updatePassword", isAuth, updatePassword);
export default router;
