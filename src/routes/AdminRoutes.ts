import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/UsersController";

const router = Router();
router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

export default router;
