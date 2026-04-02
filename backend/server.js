import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import connectDB from "./db/connectDB.js";
import notificationRoute from "./routers/notificationRoute.js";
import popupRoute from "./routers/popupRoute.js";

// ✅ NEW ROUTES
import facultyRoute from "./routers/facultyRoute.js";
import galleryRoute from "./routers/galleryRoute.js";

dotenv.config();
connectDB(process.env.MONGO_URI, process.env.DATABASE);

const app = express();

// ✅ CORS
app.use(cors({ origin: "http://localhost:5173" }));

// ✅ BODY PARSER
app.use(express.json());

// ✅ EXPOSE UPLOADS FOLDER
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ✅ EXISTING ROUTES
app.use("/api/notifications", notificationRoute);
app.use("/api/popup", popupRoute);

// ✅ NEW ROUTES
app.use("/api/faculty", facultyRoute);
app.use("/api/gallery", galleryRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
