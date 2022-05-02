import React from "react";
import { useNavigate } from "react-router-dom";



const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="page-not-found-container">
      <button className="back-button" onClick={(e) => navigate("/")}>
        &#60;&#60;
      </button>
      <div className="page-not-found">
        <p>Ooooopps! Page Not Found</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
