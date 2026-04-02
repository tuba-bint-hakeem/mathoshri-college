import React from "react";
import { Routes, Route } from "react-router-dom";

import FirstPage from "./pages/FirstPage.jsx";
import Admin from "./pages/Admin.jsx";
import NotificationPage from "./pages/NotificationPage.jsx";
import CreateNotification from "./components/CreateNotification.jsx";
import SchoolPage3 from "./pages/SchoolPage3.jsx";
import CivilEngineerPage from "./pages/CivilEngineerPage.jsx";
import ManagementPage from "./pages/ManagementPage.jsx";  // ✅ ADD

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="/notifications" element={<NotificationPage />} />
      <Route path="/create-notification" element={<CreateNotification />} />

      <Route path="/school-of-engineering" element={<SchoolPage3 />}>
        <Route path="civil" element={<CivilEngineerPage />} />
      </Route>

      {/* ✅ ADD THIS */}
      <Route path="/school-of-management" element={<ManagementPage />} />

    </Routes>
  );
}

export default App;