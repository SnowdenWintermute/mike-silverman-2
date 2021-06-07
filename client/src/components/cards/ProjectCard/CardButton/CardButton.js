import React, { useState } from "react";

const CardButton = ({ text, icon, link }) => {
  const [showText, setShowText] = useState(false);
  const handleMouseEnter = () => {
    setShowText(true);
  };
  const handleMouseLeave = () => {
    setShowText(false);
  };
  return (
    <a
      href={link}
      className="card-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showText ? <span className="card-button-text">{text}</span> : null}
      {icon}
    </a>
  );
};

export default CardButton;
