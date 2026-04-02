import { useEffect, useState } from "react";
import axios from "../api/axios";
import Navbar from "../components/Navbar";
import DashboardHeader from "../components/DashboardHeader";
import "./PopupNotificationPage.css";

const BASE_URL = "http://localhost:4000";

const PopupNotificationPage = () => {
  const [popups, setPopups] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);

  const loadPopups = async () => {
    try {
      const res = await axios.get("/popup");
      setPopups(res.data);
    } catch (err) {
      console.error("Failed to load popups:", err);
    }
  };

  useEffect(() => {
    loadPopups();
  }, []);

  const addPopupFromURL = async () => {
    if (!imageUrl) return alert("Enter image URL");
    try {
      await axios.post("/popup", { imageUrl });
      setImageUrl("");
      loadPopups();
    } catch (err) {
      alert("Failed to add popup from URL");
    }
  };

  const addPopupFromFile = async () => {
    if (!file) return alert("Select a file");

    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post("/popup/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(null);
      loadPopups();
    } catch (err) {
      alert("Upload failed");
    }
  };

  const activatePopup = async (id) => {
    await axios.put(`/popup/${id}`);
    loadPopups();
  };

  const deletePopup = async (id) => {
    await axios.delete(`/popup/${id}`);
    loadPopups();
  };

  return (
    <>
      <Navbar />

      <div className="popup-page-container">
        <DashboardHeader />
        <h2>Popup Notifications</h2>

        <div className="popup-upload">
          <input
            type="text"
            placeholder="Paste Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={addPopupFromURL}>Add from URL</button>
        </div>

        <div className="popup-upload">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button onClick={addPopupFromFile}>Upload File</button>
        </div>

        <table className="popup-table">
          <thead>
            <tr>
              <th>Preview</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {popups.length ? (
              popups.map((p) => (
                <tr key={p._id}>
                  <td>
                    <img
                      src={
                        p.imageUrl.startsWith("http")
                          ? p.imageUrl
                          : `${BASE_URL}${p.imageUrl}`
                      }
                      alt="popup"
                      className="popup-preview"
                    />
                  </td>
                  <td>{p.active ? "Active" : "Inactive"}</td>
                  <td className="popup-actions">
                    <button onClick={() => activatePopup(p._id)}>
                      Activate
                    </button>
                    <button onClick={() => deletePopup(p._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No popups found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PopupNotificationPage;
