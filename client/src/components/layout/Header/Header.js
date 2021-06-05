import React, { useRef, useEffect, useState } from "react";
import Snow from "../../Snow/Snow";

const Header = () => {
  const self = useRef();
  const [ownHeight, setOwnHeight] = useState();
  const [ownWidth, setOwnWidth] = useState();
  useEffect(() => {
    console.log(self.current);
    setOwnHeight(self.current?.clientHeight);
    setOwnWidth(self.current?.clientWidth);
  }, []);
  return (
    <div className="header" ref={self}>
      <h1>Mike Silverman</h1>
      <Snow parentHeight={ownHeight} parentWidth={ownWidth} numFlakes={400} />
    </div>
  );
};

export default Header;
