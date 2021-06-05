import Snowflake from "../Snowflake";
export default function createNewFlakes(snowflakes, flakeLimit, newFlakesPerTick, windowWidth) {
  if (snowflakes.current.length < flakeLimit) {
    for (let i = newFlakesPerTick; i > 0; i--) {
      snowflakes.current.push(
        new Snowflake({
          xPos: Math.random() * windowWidth,
          yPos: Math.random() * -20,
        })
      );
    }
  }
}
