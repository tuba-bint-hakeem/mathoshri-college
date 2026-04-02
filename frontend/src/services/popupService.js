import axios from "../api/axios";

export const getActivePopup = async () => {
  return await axios.get("/popup/active");
};

export const getAllPopups = async () => {
  return await axios.get("/popup");
};

export const uploadPopup = async (imageUrl) => {
  return await axios.post("/popup", { imageUrl });
};

export const activatePopup = async (id) => {
  return await axios.put(`/popup/${id}`);
};

export const deletePopup = async (id) => {
  return await axios.delete(`/popup/${id}`);
};
