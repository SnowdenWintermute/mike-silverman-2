import React, { useRef, useEffect, useState } from "react";
import Snow from "../../Snow/Snow";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Header = () => {
  const self = useRef();
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const [ownHeight, setOwnHeight] = useState();
  const [ownWidth, setOwnWidth] = useState();
  useEffect(() => {
    console.log(self.current);
    setOwnHeight(self.current?.clientHeight);
    setOwnWidth(self.current?.clientWidth);
  }, [windowWidth]);
  return (
    <div className="header" ref={self}>
      <h1>Mike Silverman</h1>
      <Snow parentHeight={ownHeight} parentWidth={ownWidth} numFlakes={400} />
    </div>
  );
};

export default Header;
