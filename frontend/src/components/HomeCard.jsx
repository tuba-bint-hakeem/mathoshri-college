// import React from "react";
// import "./HomeCard.css";

// const colleges = [
//   {
//     title: "School Of Engineering",
//     code: "DTE CODE- 2116",
//     desc: "The School of Engineering at Matoshri Pratishthan Group of Institutions (MPGI), Nanded is a premier engineering institute established in 2009 to provides an ideal",
//     icon: "🎓",
//   },
//   {
//     title: "School Of Management",
//     code: "DTE CODE- 2116",
//     desc: "The Department of school of management was started in 2009 with two year’s Full time Program of Post graduation in Business Administration. The MBA program was",
//     icon: "📄",
//   },
//   {
//     title: "Vishwabharati Polytechnic Institute",
//     code: "DTE CODE- 2194",
//     desc: "The Vishwabharati Polytechnic Institute (MPVPI) at Matoshri Pratishthan Group of Institutions (MPGI), Nanded, is a premier polytechnic",
//     icon: "🏛️",
//   },
// ];

// const HomeCard = () => {
//   return (
//     <section className="colleges-section">
//       <h2 className="section-title">Our Colleges</h2>
//       <div className="title-underline"></div>

//       <div className="cards-wrapper">
//         {colleges.map((item, index) => (
//           <div className="college-card" key={index}>
//             <div className="card-header">
//               <div className="icon-box">{item.icon}</div>

//               <div className="header-text">
//                 <h3>{item.title}</h3>
//                 <p className="code">{item.code}</p>
//               </div>

//               <div className="arrow-box">›</div>
//             </div>

//             <p className="description">{item.desc}...</p>

//             <button className="details-btn">
//               See Details <span>›</span>
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HomeCard;
import React from "react";
import "./HomeCard.css";
import { useNavigate } from "react-router-dom"; // ✅ STEP 1

const colleges = [
  {
    title: "School Of Engineering",
    code: "DTE CODE- 2116",
    desc: "The School of Engineering at Matoshri Pratishthan Group of Institutions (MPGI), Nanded is a premier engineering institute established in 2009 to provides an ideal",
    icon: "🎓",
    route: "/school-of-engineering", // ✅ route added
  },
  {
    title: "School Of Management",
    code: "DTE CODE- 2116",
    desc: "The Department of school of management was started in 2009 with two year’s Full time Program of Post graduation in Business Administration. The MBA program was",
    icon: "📄",
    route: "/school-of-management",
  },
  {
    title: "Vishwabharati Polytechnic Institute",
    code: "DTE CODE- 2194",
    desc: "The Vishwabharati Polytechnic Institute (MPVPI) at Matoshri Pratishthan Group of Institutions (MPGI), Nanded, is a premier polytechnic",
    icon: "🏛️",
    route: "/polytechnic",
  },
];

const HomeCard = () => {
  const navigate = useNavigate(); // ✅ STEP 2

  return (
    <section className="colleges-section">
      <h2 className="section-title">Our Colleges</h2>
      <div className="title-underline"></div>

      <div className="cards-wrapper">
        {colleges.map((item, index) => (
          <div className="college-card" key={index}>
            <div className="card-header">
              <div className="icon-box">{item.icon}</div>

              <div className="header-text">
                <h3>{item.title}</h3>
                <p className="code">{item.code}</p>
              </div>

              <div className="arrow-box">›</div>
            </div>

            <p className="description">{item.desc}...</p>

            {/* ✅ STEP 3: Button click navigation */}
            <button
              className="details-btn"
              onClick={() => navigate(item.route)}
            >
              See Details <span>›</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCard;
