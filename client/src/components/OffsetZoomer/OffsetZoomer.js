import React, { useState, useEffect, useRef } from "react";
import "../../css/sassOutput/offsetZoomer.css";

const OffsetZoomer = ({ image, alt }) => {
  const [style, setStyle] = useState({});
  const [hoveringImg, setHoveringImg] = useState(false);
  const imgRef = useRef();
  const [offset, setOffset] = useState({});
  useEffect(() => {
    const imgHeight = imgRef.current.clientHeight;
    const imgWidth = imgRef.current.clientWidth;
    const newStyle = {
      transform: `scale(${hoveringImg ? "1.8" : "1"}) translateX(${
        -(offset.x - imgWidth / 2) / 3
      }px) translateY(${-(offset.y - imgHeight / 2) / 1.5}px`,
    };
    setStyle(newStyle);
  }, [hoveringImg, offset]);

  const handleMouseMove = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    // const x = e.clientX - imgRef.current.getBoundingClientRect().left;
    // const y = e.clientY - imgRef.current.getBoundingClientRect().top;
    setOffset({ x, y });
    console.log(x);
    // console.log(y);
  };

  useEffect(() => {
    if (!hoveringImg)
      setStyle({
        transform: `scale(${hoveringImg ? "1.8" : "1"}) translateX(0%) translateY(0%)`,
      });
  }, [hoveringImg]);

  const handleMouseEnter = () => {
    setHoveringImg(true);
  };

  const handleMouseLeave = () => {
    setHoveringImg(false);
  };

  return (
    <div
      className="offset-zoomer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img ref={imgRef} className="zoomable-image" src={image} alt={alt} style={style} />
    </div>
  );
};

export default OffsetZoomer;
