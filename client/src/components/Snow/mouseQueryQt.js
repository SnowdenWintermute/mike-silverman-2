import Circle from "./Quadtree/Circle";
export default function mouseQueryQt(mouseData, e, qtRef) {
  mouseData.current.x = e.nativeEvent.offsetX;
  mouseData.current.y = e.nativeEvent.offsetY;
  if (qtRef.current) {
    const found = qtRef.current.query(
      new Circle(mouseData.current.x, mouseData.current.y, mouseData.current.radius)
    );
    console.log(found);
    found.forEach((point) => (point.userData.color = "rgb(0, 255, 0)"));
  }
}
