import { useState } from "react";
import "./PopupNotification.css";

const BASE_URL = "http://localhost:4000";

const PopupNotification = ({ image }) => {
  const [show, setShow] = useState(true);

  if (!show || !image) return null;

  const finalImage =
    image.startsWith("http") ? image : `${BASE_URL}${image}`;

  return (
    <div className="popup-overlay" onClick={() => setShow(false)}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={() => setShow(false)}>
          ✕
        </button>

        <img
          src={finalImage}
          alt="popup"
          className="popup-image"
        />
      </div>
    </div>
  );
};

export default PopupNotification;
