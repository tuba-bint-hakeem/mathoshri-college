import API from "../api/axios";

// ✅ GET ALL (optional, rakh sakte ho)
export const getFacultyService = async () => {
  return await API.get("/faculty");
};

// ✅ ✅ GET BY DEPARTMENT (IMPORTANT)
export const getFacultyByDeptService = async (dept) => {
  return await API.get(`/faculty/department/${dept}`);
};

// ✅ ADD
export const addFacultyService = async (data) => {
  return await API.post("/faculty", data);
};

// ✅ DELETE
export const deleteFacultyService = async (id) => {
  return await API.delete(`/faculty/${id}`);
};

// ✅ UPDATE
export const updateFacultyService = async (id, data) => {
  return await API.put(`/faculty/${id}`, data);
};
