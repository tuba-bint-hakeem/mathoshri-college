import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    department: {
      type: String, // Civil / CSE / etc
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Faculty", facultySchema);
