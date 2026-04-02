
import { useNavigate } from "react-router-dom";
import "./DashboardHeader.css";

const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-header">
      <div className="header-top">
        <div>
          <h1>Institution Dashboard</h1>
          <p>Manage all school activities and administration</p>
        </div>
      </div>

      <div className="header-actions">
        <button
          className="action-btn"
          onClick={() => navigate("/school-of-engineering")}
        >
          School of Engineering
        </button>

        <button className="action-btn"
        
          onClick={() => navigate("/school-of-Management")}>School of Management</button>
        <button className="action-btn">
          Vishwabharati Polytechnic Institute
        </button>

        <button
          className="action-btn"
          onClick={() => navigate("/notifications")}
        >
          Notification
        </button>

        <button
          className="action-btn"
          onClick={() => navigate("/popup-notifications")}
        >
          Popup Notifications
        </button>

        <button className="action-btn">Manage Alumni</button>
        <button className="action-btn">Manage Admins</button>
        <button className="action-btn">Manage Suggestions</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
