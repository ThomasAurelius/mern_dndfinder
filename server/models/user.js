import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true, default: "user" },
  id: { type: String },
  games: { type: [String], default: [] },
  location: { type: String, default: "" },
  about: { type: String, default: "" },
  },
  {
    timestamps: true
  },
);

export default mongoose.model("User", userSchema);