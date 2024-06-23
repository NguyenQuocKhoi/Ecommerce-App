import express from "express";
import {
  getUserProfileController,
  loginController,
  logoutController,
  registerController,
  resetPasswordController,
  updateAvatarController,
  updatePassword,
  updateProfileController,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddlewares.js";
import { singleUpload } from "../middlewares/multer.js";
import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

const router = express.Router();

router.post("/register",limiter, registerController);

router.post("/login",limiter, loginController);

router.get("/profile", isAuth, getUserProfileController);

router.get("/logout", isAuth, logoutController);

router.put("/updateProfile", isAuth, updateProfileController);

router.put("/updatePassword", isAuth, updatePassword);

router.put("/updateAvatar", isAuth, singleUpload, updateAvatarController);

router.post("/resetPassword", resetPasswordController);
export default router;
