import React, { useRef, useEffect } from "react";
import draw from "./draw";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import createSnowInterval from "./snowInterval/createSnowInterval";
import Snowflake from "./Snowflake";
import Rectangle from "./Quadtree/Rectangle";
import mouseQueryQt from "./mouseQueryQt";

const Snow = ({ numFlakes, parentHeight, parentWidth }) => {
  const canvasRef = useRef();
  const drawRef = useRef();
  const snowInterval = useRef();
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const snowflakes = useRef([]);
  const qtRef = useRef();
  const mouseData = useRef({
    x: null,
    y: null,
    radius: 25,
  });
  const wind = useRef({
    direction: 0,
    ticksSinceLastChange: 0,
  });
  // const newFlakesPerTick = 0;

  useEffect(() => {
    snowflakes.current = [];
    for (let i = numFlakes; i > 0; i--)
      snowflakes.current.push(
        new Snowflake({
          xPos: Math.random() * canvasRef.current.clientWidth,
          yPos: Math.random() * canvasRef.current.clientHeight,
        })
      );
  }, [windowWidth, windowHeight, parentHeight, parentWidth, numFlakes]);

  useEffect(() => {
    drawRef.current = function () {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      draw({
        context,
        elementWidth: canvasRef.current.clientWidth,
        elementHeight: canvasRef.current.clientHeight,
        snowflakes: snowflakes.current,
        qtRef,
        mouseData,
      });
    };
  });

  useEffect(() => {
    function currentDrawFunction() {
      drawRef.current();
    }
    snowInterval.current = createSnowInterval({
      currentDrawFunction,
      elementWidth: canvasRef.current.clientWidth,
      elementHeight: canvasRef.current.clientHeight,
      snowflakes,
      qtRef,
      wind,
      newFlakesPerTick: 10,
      flakeLimit: 10000,
    });

    return () => clearInterval(snowInterval.current);
  });

  const handleMouseMove = (e) => {
    console.log("handleMouseMove");
    mouseQueryQt(mouseData, e, qtRef);
  };

  return (
    <canvas
      className="snow-canvas"
      height={parentHeight}
      width={parentWidth}
      ref={canvasRef}
      onMouseMove={handleMouseMove}
    />
  );
};

export default Snow;
