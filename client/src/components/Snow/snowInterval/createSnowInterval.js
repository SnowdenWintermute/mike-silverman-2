import Rectangle from "../Quadtree/Rectangle";
import Point from "../Quadtree/Point";
import Quadtree from "../Quadtree/Quadtree";
import Snowflake from "../Snowflake";
import stickSnowflakes from "./stickSnowflakes";
import createNewFlakes from "./createNewFlakes";

export default function createSnowInterval({
  currentDrawFunction,
  windowHeight,
  windowWidth,
  snowflakes,
  qtRef,
  wind,
  newFlakesPerTick,
  flakeLimit,
}) {
  return setInterval(() => {
    // wind.current.ticksSinceLastChange += 1;
    // const rollToChangeWind = Math.random() * 100 > wind.current.ticksSinceLastChange;
    // if (rollToChangeWind) {
    //   const rollToSelectWindChangeDir = Math.random();
    //   if (rollToSelectWindChangeDir < 0.2) wind.current.direction += 1;
    //   else wind.current.direction -= 1;
    // }
    // createNewFlakes(snowflakes, flakeLimit, newFlakesPerTick, windowWidth);
    snowflakes.current.forEach((snowflake) => {
      snowflake.fall(windowHeight - 10, wind);
    });
    qtRef.current = new Quadtree(
      new Rectangle(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight),
      4
    );
    if (snowflakes) {
      snowflakes.current.forEach((snowflake, i) =>
        qtRef.current.insert(new Point(snowflake.xPos, snowflake.yPos, snowflake))
      );
    }
    // stickSnowflakes(snowflakes, qtRef);
    currentDrawFunction();
  }, 66);
}
