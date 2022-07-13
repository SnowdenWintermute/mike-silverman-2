import React, { useState } from "react";

const CardButton = ({ text, icon, link }) => {
  const [showTextClass, setShowTextClass] = useState("card-button-text-hidden");

  const handleMouseEnter = () => {
    setShowTextClass("");
  };
  const handleMouseLeave = () => {
    setShowTextClass("card-button-text-hidden");
  };
  return (
    <a
      href={link}
      className="card-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {<span className={`card-button-text ${showTextClass}`}>{text}</span>}
      {icon}
    </a>
  );
};

export default CardButton;
