const drawQt = (qt, context) => {
  context.strokeStyle = `rgba(100,100,100, 1)`;
  context.lineWidth = 1;
  context.strokeRect(qt.boundary.left, qt.boundary.top, qt.boundary.w, qt.boundary.h);
  if (qt.divided) {
    drawQt(qt.northwest, context);
    drawQt(qt.northeast, context);
    drawQt(qt.southwest, context);
    drawQt(qt.southeast, context);
  }
};

function draw({ context, elementHeight, elementWidth, snowflakes, qtRef, mouseData }) {
  context.clearRect(0, 0, elementWidth, elementHeight);
  context.beginPath();
  snowflakes.forEach((flake) => {
    context.fillStyle = flake.color;
    context.fillRect(flake.xPos, flake.yPos, flake.height, flake.width);
    // context.strokeRect(flake.xPos - 2 , flake.yPos+flake.height, 4, 4)
  });
  const qt = qtRef.current;
  drawQt(qt, context);
  // context.strokeStyle = "rgb(100,255,100)";
  // context.arc(mouseData.current.x, mouseData.current.y, mouseData.current.radius, 0, 2 * Math.PI);
  // context.stroke();
  // context.strokeRect(mouseData.current.x - mouseData.current.boxSize, mouseData.current.y - mouseData.current.boxSize, mouseData.current.boxSize, mouseData.current.boxSize)
}

export default draw;
