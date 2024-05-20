import mongoose from "mongoose";
import User from "../models/User";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  // get id from URL
  const id = req.params.id;

  // check if id is valid (can be transformed to ObjecId)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    // fetch user by id
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error });
  }
};
