import Popup from "../models/popupModel.js";

// GET ALL POPUPS
export const getPopups = async (req, res) => {
  try {
    const popups = await Popup.find().sort({ createdAt: -1 });
    res.json(popups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE FROM URL
export const createPopup = async (req, res) => {
  try {
    const popup = await Popup.create({
      imageUrl: req.body.imageUrl,
      active: false,
    });
    res.status(201).json(popup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPLOAD IMAGE
export const uploadPopup = async (req, res) => {
  try {
    const popup = await Popup.create({
      imageUrl: `/uploads/${req.file.filename}`,
      active: false,
    });
    res.status(201).json(popup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ACTIVATE
export const activatePopup = async (req, res) => {
  await Popup.findByIdAndUpdate(req.params.id, { active: true });
  res.json({ message: "Activated" });
};

// DELETE
export const deletePopup = async (req, res) => {
  await Popup.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
