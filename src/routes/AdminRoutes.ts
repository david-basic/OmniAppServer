import { Router } from "express";
import usersController from "../controllers/UsersController";

const router = Router();

router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getUserById);

export default router;
