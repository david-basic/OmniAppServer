import { Router } from "express";
import bookController from "../controllers/BookController";

const router = Router();

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.get("/user/:id", bookController.getAllBooksOfUserWithId);
router.get("/users/book/:id", bookController.getAllUsersWithBookId);
router.post("/add-new", bookController.addNewBook);

export default router;
