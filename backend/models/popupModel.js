
import mongoose from "mongoose";

const popupSchema = new mongoose.Schema(
  {
    imageUrl: String,
    active: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Popup", popupSchema);
