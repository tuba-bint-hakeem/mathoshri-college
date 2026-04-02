import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../api/axios";
import "./CreateNotification.css";

export default function CreateNotification() {
  const location = useLocation();
  const navigate = useNavigate();
  const editingData = location.state;

  const [formData, setFormData] = useState(
    editingData || {
      college: "School of Engineering",
      category: "Notice Board",
      title: "",
      message: "",
      date: "",
      linkText: "",
      linkUrl: "",
    }
  );

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingData?._id) {
        await API.put(`/notifications/${editingData._id}`, formData);
        alert("Notification updated");
      } else {
        await API.post("/notifications", formData);
        alert("Notification created");
      }

      navigate("/notifications", { replace: true });
    } catch (error) {
      console.error("Create error:", error.response?.data || error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="modal">
      <div className="modal-header">
        <h2>Create Notification</h2>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="field">
            <label>College *</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
            >
              <option>School of Engineering</option>
            </select>
          </div>

          <div className="field">
            <label>Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Notice Board</option>
              <option>Important Notice</option>
              <option>News & Events</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label>Title *</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter notification title"
          />
        </div>

        <div className="field">
          <label>Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter detailed message"
          />
        </div>

        <div className="field">
          <label>Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <div className="field">
            <label>Link Text</label>
            <input
              name="linkText"
              value={formData.linkText}
              onChange={handleChange}
              placeholder="e.g., Read More"
            />
          </div>

          <div className="field">
            <label>Link URL</label>
            <input
              name="linkUrl"
              value={formData.linkUrl}
              onChange={handleChange}
              placeholder="https://example.com"
            />
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="create">
            Create
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => navigate("/notifications")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
