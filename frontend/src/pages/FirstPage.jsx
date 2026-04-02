
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import HomeContained from "../components/HomeContained";
import Footer from "../components/Footer";
import PopupNotification from "../components/PopupNotification";
import ImagePanel from "../components/ImagePanel";
import axios from "../api/axios";

const FirstPage = () => {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const loadPopup = async () => {
      try {
        const res = await axios.get("/popup");
        const activePopup = res.data.find(p => p.active === true);
        setPopup(activePopup || null);
      } catch (err) {
        console.error("Popup load error:", err);
      }
    };

    loadPopup();
  }, []);

  return (
    <>
      <Navbar />

      {/* ✅ IMAGE PANEL */}
      <ImagePanel />

      {/* ✅ POPUP */}
      {popup && <PopupNotification image={popup.imageUrl} />}

      <HomeCard />
      <HomeContained />
      <Footer />
    </>
  );
};

export default FirstPage;
