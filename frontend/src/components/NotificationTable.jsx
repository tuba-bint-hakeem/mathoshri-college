
import "./NotificationTable.css";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function NotificationTable({ notifications = [], refresh }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this notification?")) return;
    await API.delete(`/notifications/${id}`);
    refresh();
  };

  const handleEdit = (item) => {
    navigate("/create-notification", { state: item });
  };

  return (
    <div className="notification-page">
      {/* HEADER */}
      <div className="notification-header">
        <div>
          <h2>Notifications Management</h2>
          <p>Manage and share updates for School of Engineering</p>
        </div>

        <div className="header-actions">
          <select className="school-select">
            <option>School of Engineering</option>
            <option>School of Science</option>
            <option>School of Management</option>
          </select>

          <button
            className="add-notification-btn"
            onClick={() => navigate("/create-notification")}
          >
            <Plus size={18} />
            Add Notification
          </button>
        </div>
      </div>

      {/* TABLE (UNCHANGED DATA) */}
      <table className="notification-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Message</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {notifications.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No notifications found
              </td>
            </tr>
          ) : (
            notifications.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.message}</td>
                <td>{item.date}</td>
                <td className="action-icons">
                  <Pencil onClick={() => handleEdit(item)} />
                  <Trash2 onClick={() => handleDelete(item._id)} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
