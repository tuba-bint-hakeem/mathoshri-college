import React from "react";
import ManagementNavbar from "../components/ManagementNavbar.jsx";
import ManagementDashboard from "../components/ManagementDashboard.jsx";
import ManagementContained from "../components/ManagementContained.jsx";
import Footer from "../components/Footer.jsx";

const ManagementPage = () => {
  return (
    <>
      <ManagementNavbar />
      <ManagementDashboard />
      <ManagementContained />
      <Footer/>
    </>
  );
};

export default ManagementPage;