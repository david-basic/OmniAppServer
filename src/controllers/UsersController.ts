import mongoose from "mongoose";
import User from "../models/User";
import { RequestHandler } from "express";
import { ApiResponseError } from "../models/ApiResponseError";

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getUserById: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  // get id from URL
  const id = req.params.id;

  // check if id is valid mongodb id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ApiResponseError("Invalid user id", 400));
  }

  try {
    // fetch user by id
    const user = await User.findById(id).select("-password");

    if (!user) {
      return next(new ApiResponseError("User not found", 404));
    }

    res.status(200).json(user);
  } catch (err: any) {
    next(new ApiResponseError(err.message, 500));
  }
};
