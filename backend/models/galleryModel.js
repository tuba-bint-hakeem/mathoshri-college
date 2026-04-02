import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    imageUrl: String,
    department: String, // Civil / CSE / etc
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);
