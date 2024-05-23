import mongoose, { Document, Model, Schema } from "mongoose";

interface IBook extends Document {
  title: string;
  author: string;
  publisher: string;
  genre: string[];
  format: string;
  pages: number;
  description: string;
  publishedDate: Date;
  ISBN: string;
  language: string;
  coverImageURL: string;
  rating: number;
  edition: string;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  genre: { type: [String], required: true },
  format: {
    type: String,
    enum: ["Paperback", "Hardcover", "Ebook"],
    default: "Paperback",
    required: true,
  },
  pages: { type: Number },
  description: { type: String },
  publishedDate: { type: Date },
  ISBN: { type: String },
  language: { type: String },
  coverImageURL: { type: String },
  rating: { type: Number },
  edition: { type: String },
});

const Book: Model<IBook> = mongoose.model<IBook>("Book", BookSchema);

export default Book;
