import { RequestHandler } from "express";
import Book from "../models/Book";
import { ApiHttpError } from "../models/ApiHttpError";
import mongoose from "mongoose";
import UserBook from "../models/UserBook";

const getAllBooks: RequestHandler = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err: any) {
    return next(new ApiHttpError(err.message, 500));
  }
};

const getBookById: RequestHandler<{ id: string }> = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ApiHttpError("Invalid book id", 400));
  }

  try {
    const book = await Book.findById(id);

    if (!book) {
      return next(new ApiHttpError("Book not found", 404));
    }

    res.status(200).json(book);
  } catch (err: any) {
    return next(new ApiHttpError(err.message, 500));
  }
};

const addNewBook: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({ message: "" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllBooksOfUserWithId: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ApiHttpError("Invalid user id", 400));
  }

  try {
    const userBooks = await UserBook.find({ user: id }).populate("book");

    if (!userBooks) {
      return next(new ApiHttpError("No books found for this user", 404));
    }

    const books = userBooks.map((userBook) => userBook.book);

    res.status(200).json(books);
  } catch (err: any) {
    return next(new ApiHttpError(err.message, 500));
  }
};

const getAllUsersWithBookId: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ApiHttpError("Invalid book id", 400));
  }

  try {
    const userBooks = await UserBook.find({ book: id }).populate("user");

    if (!userBooks) {
      return next(new ApiHttpError("No users found for this book", 404));
    }

    const users = userBooks.map((userBook) => userBook.user);

    res.status(200).json(users);
  } catch (err: any) {
    return next(new ApiHttpError(err.message, 500));
  }
};

export default {
  getAllBooks,
  getBookById,
  addNewBook,
  getAllBooksOfUserWithId,
  getAllUsersWithBookId,
};
