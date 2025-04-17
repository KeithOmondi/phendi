// src/components/PageLoader.js
import React from "react";
import "./Loader.css"; // Add styles for the loader here

const PageLoader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
  );
};

export default PageLoader;
