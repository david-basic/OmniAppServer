import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  firstname: string;
  lastname: string;
}

const UserSchema: Schema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
