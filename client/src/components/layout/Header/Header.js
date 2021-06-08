import React, { useRef, useEffect, useState } from "react";
import Snow from "../../Snow/Snow";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

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
      <h1 className="header-text">Mike Silverman</h1>
      <Snow parentHeight={ownHeight} parentWidth={ownWidth} numFlakes={windowWidth / 8} />
    </div>
  );
};

export default Header;
