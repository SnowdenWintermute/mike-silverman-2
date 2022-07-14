import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as ArrowDownCircle } from "./arrow-down-circle.svg";

const ScrollDownIndicator = () => {
  return (
    <div className="arrow-circle-holder">
      <ArrowDownCircle className={`arrow-circle`} />
    </div>
  );
};

export default ScrollDownIndicator;
