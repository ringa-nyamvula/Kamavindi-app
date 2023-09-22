import React from 'react';
import "../styles/About.css";
import myImage from '../photos/pexels-photo-2562555.jpeg';
import myImage1 from "../photos/df85e3aa-6514-4b6c-ab6c-da9d9463c05e.jpeg";

const About = () => {
  return (
    <div className="container history__container">
      <h2 className="section-title history__section-title wow" style={{ animationName: "slideInBottom", visibility: "visible" }}>
        History
      </h2>
      <div className="history-block">
        <div className="history__item history__item_reverse history__item_w">
          <div className="history__text" style={{ animationDelay: "0.25s", animationName: "slideInLeft", visibility: "visible" }}>
            <p> Kamavindi coffee was established back in 1956 when Kenya was still under colonial rule.</p>
          </div>
          <div className="history__photo">
            <img
              className="lazyloaded"
              src={myImage1}
              alt=""
              title=""
              style={{ animationName: "zoomImage" }}
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
          </div>
        </div>
        <div className="history__photo1">
          <img
            className="lazyloaded"
            src={myImage} // Use the imported image here
            alt=""
            title=""
            style={{ animationName: "zoomImage" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = myImage; // Set the fallback image path here
            }}
          />
        </div>
        <div className="history__photo1">
          <img
            className="lazyloaded"
            src={myImage} // Use the imported image here
            alt=""
            title=""
            style={{ animationName: "zoomImage" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = myImage; // Set the fallback image path here
            }}
          />
        </div>
        {/* Repeat the structure for other history items */}
      </div>
    </div>
  );
};

export default About;
