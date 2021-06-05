import React, { useRef, useEffect } from "react";
import draw from "./draw";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import createSnowInterval from "./snowInterval/createSnowInterval";
import Snowflake from "./Snowflake";
import Rectangle from "./Quadtree/Rectangle";

const Snow = () => {
  const canvasRef = useRef();
  const drawRef = useRef();
  const snowInterval = useRef();
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const snowflakes = useRef([]);
  const qtRef = useRef();
  const mouseData = useRef({
    x: null,
    y: null,
    boxSize: 100,
  });
  const wind = useRef({
    direction: 0,
    ticksSinceLastChange: 0,
  });
  // const newFlakesPerTick = 0;

  useEffect(() => {
    snowflakes.current = [];
    for (let i = 700; i > 0; i--)
      snowflakes.current.push(
        new Snowflake({ xPos: Math.random() * windowWidth, yPos: Math.random() * windowHeight })
      );
  }, [windowWidth, windowHeight]);

  useEffect(() => {
    drawRef.current = function () {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      draw({
        context,
        windowHeight,
        windowWidth,
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
      windowHeight,
      windowWidth,
      snowflakes,
      qtRef,
      wind,
      newFlakesPerTick: 10,
      flakeLimit: 10000,
    });

    return () => clearInterval(snowInterval.current);
  });

  const handleMouseMove = (e) => {
    // mouseData.current.x = e.nativeEvent.offsetX;
    // mouseData.current.y = e.nativeEvent.offsetY;
    // if (qtRef.current) {
    //   const found = qtRef.current.query(
    //     new Rectangle(
    //       mouseData.current.x - mouseData.current.boxSize / 2,
    //       mouseData.current.y - mouseData.current.boxSize / 2,
    //       mouseData.current.boxSize,
    //       mouseData.current.boxSize
    //     )
    //   );
    //   found.forEach((point) => (point.userData.color = "rgb(0, 255, 0)"));
    // }
  };

  return (
    <canvas
      className="snow-canvas"
      height={windowHeight - 2}
      width={windowWidth - 2}
      ref={canvasRef}
      onMouseMove={handleMouseMove}
    />
  );
};

export default Snow;
