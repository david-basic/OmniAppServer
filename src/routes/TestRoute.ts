import { Router } from "express";
import { getAllUsers } from "../controllers/TestController";

const testRoute = Router();

testRoute.get("/", getAllUsers);

export default testRoute;
