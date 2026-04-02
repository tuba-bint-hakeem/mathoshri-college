import Popup from "../models/popupModel.js";

export const createPopup = async (imageUrl) => {
  // deactivate old popups
  await Popup.updateMany({}, { active: false });

  return await Popup.create({ imageUrl, active: true });
};

export const getAllPopups = async () => {
  return await Popup.find().sort({ createdAt: -1 });
};

export const getActivePopup = async () => {
  return await Popup.findOne({ active: true });
};

export const togglePopupStatus = async (id) => {
  const popup = await Popup.findById(id);
  if (!popup) return null;

  await Popup.updateMany({}, { active: false });
  popup.active = true;
  return await popup.save();
};

export const deletePopup = async (id) => {
  return await Popup.findByIdAndDelete(id);
};
