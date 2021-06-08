import Rectangle from "../Quadtree/Rectangle";
import Point from "../Quadtree/Point";
import Quadtree from "../Quadtree/Quadtree";
import Snowflake from "../Snowflake";
import stickSnowflakes from "./stickSnowflakes";
import createNewFlakes from "./createNewFlakes";

export default function createSnowInterval({
  currentDrawFunction,
  elementHeight,
  elementWidth,
  snowflakes,
  qtRef,
  mouseData,
  wind,
  newFlakesPerTick,
  flakeLimit,
  mouseQueryQt,
}) {
  return setInterval(() => {
    // wind.current.ticksSinceLastChange += 1;
    // const rollToChangeWind = Math.random() * 100 > wind.current.ticksSinceLastChange;
    // if (rollToChangeWind) {
    //   const rollToSelectWindChangeDir = Math.random();
    //   if (rollToSelectWindChangeDir < 0.2) wind.current.direction += 1;
    //   else wind.current.direction -= 1;
    // }
    // createNewFlakes(snowflakes, flakeLimit, newFlakesPerTick, elementWidth);
    snowflakes.current.forEach((snowflake) => {
      snowflake.fall(elementHeight - 10, elementWidth);
    });
    qtRef.current = new Quadtree(
      new Rectangle(elementWidth / 2, elementHeight / 2, elementWidth, elementHeight),
      4
    );
    if (snowflakes) {
      snowflakes.current.forEach((snowflake, i) =>
        qtRef.current.insert(new Point(snowflake.xPos, snowflake.yPos, snowflake))
      );
    }
    mouseQueryQt(mouseData, qtRef);
    // stickSnowflakes(snowflakes, qtRef);
    currentDrawFunction();
  }, 66);
}
