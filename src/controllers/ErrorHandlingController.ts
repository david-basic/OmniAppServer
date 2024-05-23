import { ErrorRequestHandler } from "express";
import { ApiHttpError } from "../models/ApiHttpError";

export const errorHandler: ErrorRequestHandler = (
  err: ApiHttpError,
  req,
  res,
  next
) => {
  if (res.headersSent) {
    return next(err);
  }

  const status = err.status || 500;

  res.status(status).json({
    error: err.message || "Something went wrong! Contact the administrator.",
  });
};
