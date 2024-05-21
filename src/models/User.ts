import mongoose, { Document, Model, Schema } from "mongoose";

//Represent a user document in the database
interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
