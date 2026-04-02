// import Navbar from "../components/Navbar";
// import DashboardHeader from "../components/DashboardHeader";
// import NotificationTable from "../components/NotificationTable";

// import FacultyTable from "../components/FacultyTable.jsx";     // ✅ NEW
// import GalleryTable from "../components/GalleryTable.jsx";     // ✅ NEW

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { getAllNotifications } from "../services/notificationService";
// import { getFacultyService } from "../services/facultyService.js";     // ✅ NEW
// import { getGalleryService } from "../services/galleryService";     // ✅ NEW

// export default function NotificationPage() {
//   const [notifications, setNotifications] = useState([]);
//   const [faculty, setFaculty] = useState([]);     // ✅ NEW
//   const [photos, setPhotos] = useState([]);       // ✅ NEW

//   const [activeTab, setActiveTab] = useState("notifications");  // ✅ NEW

//   const navigate = useNavigate();

//   // ✅ LOADERS
//   const loadNotifications = async () => {
//     const res = await getAllNotifications();
//     setNotifications(res.data);
//   };

//   const loadFaculty = async () => {
//     const res = await getFacultyService();
//     setFaculty(res.data);
//   };

//   const loadGallery = async () => {
//     const res = await getGalleryService();
//     setPhotos(res.data);
//   };

//   useEffect(() => {
//     loadNotifications();
//     loadFaculty();
//     loadGallery();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div style={{ padding: "16px" }}>
//         <DashboardHeader />

//         {/* ✅ TAB BUTTONS 🔥 */}
//         <div style={{ marginTop: "20px" }}>
//           <button onClick={() => setActiveTab("notifications")}>
//             Notifications
//           </button>

//           <button onClick={() => setActiveTab("faculty")}>
//             Faculty
//           </button>

//           <button onClick={() => setActiveTab("gallery")}>
//             Gallery
//           </button>
//         </div>

//         {/* ✅ CREATE BUTTON (SMART) */}
//         {activeTab === "notifications" && (
//           <button
//             onClick={() => navigate("/create-notification")}
//             style={btnStyle}
//           >
//             Create Notification
//           </button>
//         )}

//         {activeTab === "faculty" && (
//           <button
//             onClick={() => navigate("/create-faculty")}
//             style={btnStyle}
//           >
//             Add Faculty
//           </button>
//         )}

//         {activeTab === "gallery" && (
//           <button
//             onClick={() => navigate("/upload-photo")}
//             style={btnStyle}
//           >
//             Upload Photo
//           </button>
//         )}
//       </div>

//       {/* ✅ SMART TABLE SWITCH 🔥 */}
//       {activeTab === "notifications" && (
//         <NotificationTable
//           notifications={notifications}
//           refresh={loadNotifications}
//         />
//       )}

//       {activeTab === "faculty" && (
//         <FacultyTable faculty={faculty} refresh={loadFaculty} />
//       )}

//       {activeTab === "gallery" && (
//         <GalleryTable photos={photos} refresh={loadGallery} />
//       )}
//     </>
//   );
// }

// const btnStyle = {
//   padding: "10px 16px",
//   backgroundColor: "#2563eb",
//   color: "#fff",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer",
//   marginTop: "12px"
// // };
// import Navbar from "../components/Navbar";
// import DashboardHeader from "../components/DashboardHeader";
// import NotificationTable from "../components/NotificationTable";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllNotifications } from "../services/notificationService";

// export default function NotificationPage() {
//   const [notifications, setNotifications] = useState([]);
//   const navigate = useNavigate();

//   const loadNotifications = async () => {
//     const res = await getAllNotifications();
//     setNotifications(res.data);
//   };

//   useEffect(() => {
//     loadNotifications();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div style={{ padding: "16px" }}>
//         <DashboardHeader />

//         <button
//           onClick={() => navigate("/create-notification")}
//           style={{
//             padding: "10px 16px",
//             backgroundColor: "#2563eb",
//             color: "#fff",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//             marginTop: "12px"
//           }}
//         >
//           Create Notification
//         </button>
//       </div>

//       <NotificationTable
//         notifications={notifications}
//         refresh={loadNotifications}
//       />
 
//     </>
//   );
// }



import Navbar from "../components/Navbar";
import DashboardHeader from "../components/DashboardHeader";
import NotificationTable from "../components/NotificationTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllNotifications } from "../services/notificationService";

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const loadNotifications = async () => {
    const res = await getAllNotifications();
    setNotifications(res.data);
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <>
      <Navbar />

      <div style={{ padding: "16px" }}>
        <DashboardHeader />

        {/* 🔥 FIXED PATH */}
        <button
          onClick={() => navigate("/admin/create-notification")}
          style={{
            padding: "10px 16px",
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "12px"
          }}
        >
          Create Notification
        </button>
      </div>

      <NotificationTable
        notifications={notifications}
        refresh={loadNotifications}
      />
    </>
  );
}