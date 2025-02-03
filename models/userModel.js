import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
    },
    password: {
      type: String,
      // TODO : update it later to add google authentication
      required: [true, "Please provide the password"],
    },
  },
  {
    timestamps: true,
  }
);

// special care in mongodb whether to create a new model or does it already exists
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
