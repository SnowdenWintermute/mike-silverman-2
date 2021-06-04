const drawQt = (qt, context) => {
  context.strokeStyle = `rgba(255,100,100, .3)`
  context.lineWidth = 1
  context.strokeRect(qt.boundary.left, qt.boundary.top, qt.boundary.w*2, qt.boundary.h*2)
  if (qt.divided) {
    drawQt(qt.northwest, context)
    drawQt(qt.northeast, context)
    drawQt(qt.southwest, context)
    drawQt(qt.southeast, context)
  }
}


function draw({
  context,
  windowHeight,
  windowWidth,
  snowflakes,
  qtRef,
  mouseData
}) {
  context.clearRect(0, 0, windowWidth, windowHeight);
  context.beginPath();
  snowflakes.forEach(flake => {
    context.fillStyle = flake.color;
    context.fillRect(flake.xPos, flake.yPos, flake.height, flake.width);
    // context.strokeRect(flake.xPos - 2 , flake.yPos+flake.height, 4, 4)
  })
  // const qt = qtRef.current
  // drawQt(qt, context)
  context.strokeStyle = "rgb(100,255,100)"
  context.strokeRect(mouseData.current.x - mouseData.current.boxSize, mouseData.current.y - mouseData.current.boxSize, mouseData.current.boxSize, mouseData.current.boxSize)
}

export default draw