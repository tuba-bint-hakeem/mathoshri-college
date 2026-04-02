// import React from "react";

// import SchoolNavbar from "../components/SchoolNavbar.jsx";
// import SchoolDashboard from "../components/SchoolDashboard.jsx";
// import SchoolContained from "../components/SchoolContained.jsx";
// import Footer from "../components/Footer.jsx";

// const SchoolPage3 = () => {
//   return (
//     <>
//       <SchoolNavbar />
//       <SchoolDashboard />
//       <SchoolContained />
//       <Footer />
//     </>
//   );
// };

// export default SchoolPage3;



import React from "react";
import { Outlet } from "react-router-dom";

import SchoolNavbar from "../components/SchoolNavbar.jsx";
import SchoolDashboard from "../components/SchoolDashboard.jsx";
import SchoolContained from "../components/SchoolContained.jsx";
import Footer from "../components/Footer.jsx";

const SchoolPage3 = () => {
  return (
    <>
      <SchoolNavbar />
      <SchoolDashboard />

      {/* 👇 YAHAN DEPARTMENT PAGE AAYEGA */}
      <Outlet />

      <SchoolContained />
      <Footer />
    </>
  );
};

export default SchoolPage3;
