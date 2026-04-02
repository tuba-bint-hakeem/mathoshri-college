import API from "../api/axios";

// ✅ GET
export const getGalleryService = async () => {
  return await API.get("/gallery");
};

// ✅ ADD
export const addPhotoService = async (data) => {
  return await API.post("/gallery", data);
};

// ✅ DELETE
export const deletePhotoService = async (id) => {
  return await API.delete(`/gallery/${id}`);
};
