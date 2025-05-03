import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controller/userController.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

/* GET users listing. */
router.post("/user", validateUser, createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
