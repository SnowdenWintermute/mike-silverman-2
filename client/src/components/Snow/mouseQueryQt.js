import Rectangle from "./Quadtree/Rectangle";
export default function mouseQueryQt(mouseData, e, qtRef) {
  mouseData.current.x = e.nativeEvent.offsetX;
  mouseData.current.y = e.nativeEvent.offsetY;
  if (qtRef.current) {
    const found = qtRef.current.query(
      new Rectangle(
        mouseData.current.x - mouseData.current.boxSize / 2,
        mouseData.current.y - mouseData.current.boxSize / 2,
        mouseData.current.boxSize,
        mouseData.current.boxSize
      )
    );
    found.forEach((point) => (point.userData.color = "rgb(0, 255, 0)"));
  }
}
