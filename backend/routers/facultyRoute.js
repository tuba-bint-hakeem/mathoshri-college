import express from "express";
import {
  createFaculty,
  getFaculty,
  getFacultyByDepartment,   // ✅ NEW
  deleteFaculty,
  updateFaculty,
} from "../controllers/facultyController.js";

const router = express.Router();

// CREATE
router.post("/", createFaculty);

// GET ALL
router.get("/", getFaculty);

// ✅ ✅ GET BY DEPARTMENT (IMPORTANT)
router.get("/department/:dept", getFacultyByDepartment);

// DELETE
router.delete("/:id", deleteFaculty);

// UPDATE
router.put("/:id", updateFaculty);

export default router;
