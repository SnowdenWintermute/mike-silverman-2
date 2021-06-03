const drawQt = (qt, context) => {
  context.strokeRect(qt.boundary.x, qt.boundary.y, qt.boundary.w, qt.boundary.h)
  if(qt.divided){
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
  qtRef
}) {
  context.clearRect(0, 0, windowWidth, windowHeight);
  context.beginPath();
  context.fillStyle = "rgb(255,255,255)";
  snowflakes.forEach(flake => {
    context.fillRect(flake.xPos, flake.yPos, flake.height, flake.width);
  })
  const qt = qtRef.current
  context.strokeStyle = "rgb(255,100,100)"
  context.lineWidth = 5
  drawQt(qt, context)
  // context.strokeRect(qt.boundary.x - qt.boundary.w, qt.boundary.y - qt.boundary.h, qt.boundary.w * 2, qt.boundary.h * 2)
}

export default draw