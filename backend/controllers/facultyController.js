import Faculty from "../models/facultyModel.js";

// ================= CREATE =================
export const createFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.create(req.body);
    res.status(201).json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= GET ALL =================
export const getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ ✅ ================= GET BY DEPARTMENT =================
export const getFacultyByDepartment = async (req, res) => {
  try {
    const faculty = await Faculty.find({
      department: req.params.dept,
    });

    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= DELETE =================
export const deleteFaculty = async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.json({ message: "Faculty deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= UPDATE =================
export const updateFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
