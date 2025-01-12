import express from "express"
import { getOtherUser, login, logout, register } from "../controllers/userController.js"
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router()

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/").get(isAuthenticated,getOtherUser);

router.route("/logout").post(logout);

export default router;