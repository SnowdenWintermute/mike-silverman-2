import Rectangle from './Quadtree/Rectangle'
import Point from './Quadtree/Point'
import Quadtree from './Quadtree/Quadtree'

export default function createSnowInterval({ currentDrawFunction, windowHeight, windowWidth, snowflakes, qtRef }) {
  return setInterval(() => {
    snowflakes.forEach(flake => {
      flake.yPos += flake.area / 2
      if (flake.yPos >= windowHeight) flake.yPos = -Math.random() * 50
    })
    qtRef.current = new Quadtree(new Rectangle(windowWidth, windowHeight, windowWidth, windowHeight), 4)
    if(snowflakes){
      snowflakes.forEach((snowflake, i) => {
        qtRef.current.insert(new Point(snowflake.xPos,snowflake.yPos, snowflake))
      })
    }
    currentDrawFunction()
  }, 66)
}