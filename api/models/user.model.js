import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://firebasestorage.googleapis.com/v0/b/mean-auth-c0131.appspot.com/o/user.png?alt=media&token=3b431414-4e7f-4849-95ec-dbb76c3e0ba4",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
