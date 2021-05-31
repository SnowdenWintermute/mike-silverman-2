function draw({
  context,
  windowHeight,
  windowWidth,
  snowflakes
}) {
  context.clearRect(0, 0, windowWidth, windowHeight);
  context.beginPath();
  context.fillStyle = "rgb(255,255,255)";
  snowflakes.forEach(flake => {
    context.fillRect(flake.xPos, flake.yPos, flake.height, flake.width);
  })
}

export default draw