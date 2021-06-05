import Rectangle from "../Quadtree/Rectangle";

export default function stickSnowflakes(snowflakes, qtRef) {
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
        flakeFound.z === snowflake.z &&
        !flakeFound.falling
      ) {
        snowflake.falling = false;
      }
    });
  });
}
