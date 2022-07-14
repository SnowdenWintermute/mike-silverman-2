import React from "react";

const AnchorButton = ({ text, anchor }) => {
  return (
    <a className="basic-button" href={anchor}>
      {text}
    </a>
  );
};

export default AnchorButton;
