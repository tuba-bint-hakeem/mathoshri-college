import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    college: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date:{
   date: String, 

   } ,      
    linkText: {
      type: String,
    },
    linkUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);


