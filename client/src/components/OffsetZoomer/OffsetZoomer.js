import React, { useState, useEffect, useRef, useCallback } from "react";
import throttledHandlerCreator from "../../utils/throttledEventHandlerCreator";
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

  const handleMouseMove = useCallback(throttledHandlerCreator(33,(e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setOffset({ x, y });
  }),[]);

  useEffect(() => {
    if (!hoveringImg)
      setStyle({
        transform: `scale(${hoveringImg ? "1.8" : "1"}) translateX(0%) translateY(0%)`,
      });
  }, [hoveringImg]);

  const handleMouseEnter = () => setHoveringImg(true);
  const handleMouseLeave = () => setHoveringImg(false);
  const handleTouchStart = () => {
    setHoveringImg(true);
  };
  const handleTouchEnd = () => setHoveringImg(false);
  const handleTouchMove = useCallback(throttledHandlerCreator(33,(e) => {
    const bcr = e.target.getBoundingClientRect();
    const x = e.targetTouches[0].clientX - bcr.x;
    const y = e.targetTouches[0].clientY - bcr.y;
    setOffset({ x, y });
  }),[]);
  // handleMouseMove(e);

  return (
    <div
      className="offset-zoomer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <img ref={imgRef} className="zoomable-image" src={image} alt={alt} style={style} />
    </div>
  );
};

export default OffsetZoomer;
