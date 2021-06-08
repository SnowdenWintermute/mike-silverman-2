import Circle from "./Quadtree/Circle";
export default function mouseQueryQt(mouseData, qtRef) {
  const snowRepelSpeed = 5;
  if (qtRef.current) {
    const found = qtRef.current.query(
      new Circle(mouseData.current.x, mouseData.current.y, mouseData.current.radius)
    );

    // found.forEach((point) => (point.userData.color = "rgb(0, 255, 0)"));
    found.forEach((point) => {
      if (point.x < mouseData.current.x) point.userData.xPos -= snowRepelSpeed;
      else point.userData.xPos += snowRepelSpeed;
      // if (point.y < mouseData.current.y) point.userData.yPos -= snowRepelSpeed * 8;
      // else
      // point.userData.color = "rgb(255, 0, 0)";
      point.userData.yPos += snowRepelSpeed;
    });
  }
}
