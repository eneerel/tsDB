import { Schema, model, connect } from "mongoose";

interface IUser {
  name: string;
  email: string;
  avatar?: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
  password: { type: String, select: false },
});

const user = model("User", userSchema);
export default user;
