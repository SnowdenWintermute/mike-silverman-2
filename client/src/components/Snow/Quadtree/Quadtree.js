import Rectangle from "./Rectangle";

export default class Quadtree {
  constructor({ boundary, capacity }) {
    if (!boundary)
      throw TypeError('boundary is null or undefined');
    if (!(boundary instanceof Rectangle))
      throw TypeError('boundary should be a Rectangle');
    if (typeof capacity !== 'number')
      throw TypeError(`capacity should be a number but is a ${typeof capacity}`);
    if (capacity < 1)
      throw RangeError('capacity must be greater than 0');
    this.boundary = boundary;
    this.capacity = capacity
    this.points = []
    this.divided = false
  }

  get children() {
    if (this.divided) {
      return [
        this.northeast,
        this.northwest,
        this.southeast,
        this.southwest
      ];
    } else {
      return [];
    }
  }

  insert(point) {
    if (this.points.length < this.capacity) {
      this.points.push(point)
    } else {
      if (!this.divided) {
        this.subdivide()
        this.divided = true
      }
    }
  }

  subdivide() {
    const x = this.boundary.x
    const y = this.boundary.y
    const w = this.boundary.w
    const h = this.boundary.h
    let ne = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2)
    this.northeast = new Quadtree({ bondary: ne, capacity: this.capacity })
    let nw = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2)
    this.northwest = new Quadtree({ bondary: nw, capacity: this.capacity })
    let se = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2)
    this.southeast = new Quadtree({ bondary: se, capacity: this.capacity })
    let sw = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2)
    this.southwest = new Quadtree({ bondary: sw, capacity: this.capacity })
  }

}