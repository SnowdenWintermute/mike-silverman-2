import Rectangle from './Quadtree/Rectangle'
import Point from './Quadtree/Point'
import Quadtree from './Quadtree/Quadtree'

export default function createSnowInterval({ currentDrawFunction, windowHeight, windowWidth, snowflakes, qtRef }) {
  return setInterval(() => {
    // snowflakes.forEach(flake => flake.fall(windowHeight))
    // qtRef.current = new Quadtree(new Rectangle(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2), 4)
    qtRef.current = new Quadtree(new Rectangle(0, 0, windowWidth, windowHeight), 4)
    if (snowflakes) {
      snowflakes.forEach((snowflake, i) => qtRef.current.insert(new Point(snowflake.xPos, snowflake.yPos, snowflake)))
    }
    currentDrawFunction()
  }, 66)
}