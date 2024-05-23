import mongoose from "mongoose";
import User from "../models/User";
import { RequestHandler } from "express";
import { ApiHttpError } from "../models/ApiHttpError";

const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getUserById: RequestHandler<{ id: string }> = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ApiHttpError("Invalid user id", 400));
  }

  try {
    const user = await User.findById(id).select("-password");

    if (!user) {
      return next(new ApiHttpError("User not found", 404));
    }

    res.status(200).json(user);
  } catch (err: any) {
    return next(new ApiHttpError(err.message, 500));
  }
};

export default { getAllUsers, getUserById };
