export default function createSnowInterval({ currentDrawFunction, windowHeight, windowWidth, snowflakes }) {
  return setInterval(() => {
    snowflakes.forEach(flake => {
      flake.yPos += flake.area / 2
      if (flake.yPos >= windowHeight) flake.yPos = -Math.random() * 50
    })
    currentDrawFunction()
  }, 66)
}