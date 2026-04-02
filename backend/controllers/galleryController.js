import Gallery from "../models/galleryModel.js";

// CREATE
export const addPhoto = async (req, res) => {
  try {
    const photo = await Gallery.create(req.body);
    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET
export const getPhotos = async (req, res) => {
  try {
    const photos = await Gallery.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deletePhoto = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Photo deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

