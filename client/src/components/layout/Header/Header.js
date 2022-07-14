import React, { useRef, useEffect, useState } from "react";
import Snow from "../../Snow/Snow";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
// import ScrollDownIndicator from "../../scrollDownIndicator/ScrollDownIndicator";
import AnchorButton from "../../buttons/AnchorButton/AnchorButton";

const Header = () => {
  const self = useRef();
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const [ownHeight, setOwnHeight] = useState();
  const [ownWidth, setOwnWidth] = useState();
  useEffect(() => {
    setOwnHeight(self.current?.clientHeight);
    setOwnWidth(self.current?.clientWidth);
  }, [windowWidth, windowHeight]);

  return (
    <div className="header" ref={self}>
      <div className="header-text-holder">
        <h1 className="header-text">Mike Silverman</h1>
        <AnchorButton text="View Projects" anchor="#projects" />
      </div>
      {/* <ScrollDownIndicator /> */}
      <Snow
        parentHeight={ownHeight}
        parentWidth={ownWidth}
        numFlakes={windowWidth / 8}
      />
    </div>
  );
};

export default Header;
