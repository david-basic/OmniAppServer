import mongoose, { Document } from "mongoose";

interface IUserBook extends Document {
  user: mongoose.Types.ObjectId;
  book: mongoose.Types.ObjectId;
  addedAt: Date;
}

const UserBookSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  book: { type: mongoose.Types.ObjectId, ref: "Book", required: true },
  addedAt: { type: Date, default: Date.now },
});

const UserBook = mongoose.model<IUserBook>("UserBook", UserBookSchema);

export default UserBook;
