import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/UsersController";

const getAllUsersRoute = Router();
getAllUsersRoute.get("/users", getAllUsers);

const getUserByIdRoute = Router();
getUserByIdRoute.get("/users/:id", getUserById);

export default { getAllUsersRoute, getUserByIdRoute };
