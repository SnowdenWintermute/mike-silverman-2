import React, { useEffect } from "react";

const AppearingText = ({ text, hidden }) => {
  const offscreenTopClass = hidden ? "offscreen-top" : null;
  return (
    <div className="appearing-text-holder">
      <span className="top-line" />
      <span className={`appearing-text ${offscreenTopClass}`}>{text}</span>
    </div>
  );
};

export default AppearingText;
