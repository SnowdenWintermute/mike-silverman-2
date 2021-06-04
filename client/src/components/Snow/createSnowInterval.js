import Rectangle from "./Quadtree/Rectangle";
import Point from "./Quadtree/Point";
import Quadtree from "./Quadtree/Quadtree";
import Snowflake from "./Snowflake";

export default function createSnowInterval({
  currentDrawFunction,
  windowHeight,
  windowWidth,
  snowflakes,
  qtRef,
}) {
  return setInterval(() => {
    snowflakes.current.forEach((snowflake) => {
      if (!snowflake.falling) return;
      snowflake.yPos += snowflake.area;
      // if (snowflake.yPos >= groundLevel) snowflake.yPos = -Math.random() * 50
      if (snowflake.yPos >= windowHeight - 100) {
        snowflake.falling = false;
        snowflakes.current.push(
          new Snowflake({
            xPos: Math.random() * windowWidth,
            yPos: Math.random() * -20,
          })
        );
      }
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
    snowflakes.current.forEach((snowflake, i) => {
      if (!snowflake.falling) return;
      const found = qtRef.current.query(
        new Rectangle(
          snowflake.xPos + snowflake.width / 2,
          snowflake.yPos + snowflake.height / 2,
          4,
          4
        )
      );
      found.forEach((point) => {
        const flakeFound = point.userData;
        if (
          flakeFound.xPos <= snowflake.xPos + snowflake.width &&
          flakeFound.xPos >= snowflake.xPos &&
          flakeFound.yPos <= snowflake.yPos + snowflake.height + 1 &&
          !flakeFound.falling
        ) {
          snowflake.falling = false;
          snowflakes.current.push(
            new Snowflake({
              xPos: Math.random() * windowWidth,
              yPos: Math.random() * -20,
            })
          );
        }
      });
    });
    currentDrawFunction();
  }, 66);
}
