import React from 'react'
import "./Marquee.scss";

const Marquee = () => {
  return (
    <div className="marquee">
      <ul className="marquee__content">
        <li className="mark-text">HTML 5</li>
        <li className="mark-text star">*</li>
        <li className="mark-text">CSS</li>
        <li className="mark-text star">*</li>
        <li className="mark-text">JAVASCRIPT</li>
        <li className="mark-text star">*</li>
        <li className="mark-text">REACT.js</li>
        <li className="mark-text star">*</li>
        <li className="mark-text">FIGMA</li>
        <li className="mark-text star">*</li>
        <li className="mark-text">SCSS</li>
        <li className="mark-text star">*</li>
        <li className="mark-text">NEXT.js</li>
        <li className="mark-text star">*</li>
        <li className="mark-text">TYPESCRIPT</li>
        <li className="mark-text star">*</li>
      </ul>
    </div>
  );
};

export default Marquee