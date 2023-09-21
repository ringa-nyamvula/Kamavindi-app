import React from "react";
import "../styles/Home.css";

const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="div" />
          <div className="circle-edit" />
          <div className="rectangle-2" />
        </div>
        <div className="info">
          <p className="welcome-to-the">Welcome to the family run coffee farm</p>
          <div className="text-wrapper-5">Established in 1956</div>
          <div className="text-wrapper-6">10,000</div>
          <div className="text-wrapper-7">Coffee Trees</div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
