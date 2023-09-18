import React from "react";
import "./style.css";

const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="div" />
          <div className="circle-edit" />
          <div className="navbar">
            <div className="text-wrapper">HOME</div>
            <div className="text-wrapper">ABOUT</div>
            <div className="text-wrapper">PHOTOS</div>
            <div className="text-wrapper">CONTACT</div>
          </div>
          <div className="rectangle-2" />
        </div>
        <div className="logo">
          <div className="overlap-group-2">
            <div className="text-wrapper-2">K</div>
            <div className="text-wrapper-3">ama</div>
            <div className="text-wrapper-4">vindi</div>
          </div>
        </div>
        <div className="info">
          <p className="welcome-to-the">Welcome to the family run&nbsp;&nbsp;coffee farm</p>
          <div className="text-wrapper-5">Established in 1956</div>
        </div>
        <div className="text-wrapper-6">10,000</div>
        <div className="text-wrapper-7">Coffee Trees</div>
      </div>
    </div>
  );
};
export default Frame;