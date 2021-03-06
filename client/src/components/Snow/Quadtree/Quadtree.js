export default class QuadTree {
  constructor(boundary, capacity) {
    if (!boundary) throw TypeError('boundary is null or undefined');
    if (typeof capacity !== 'number') throw TypeError(`capacity should be a number but is a ${typeof capacity}`);
    if (capacity < 1) throw RangeError('capacity must be greater than 0');
    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
  }

  get children() {
    if (this.divided)
      return [
        this.northeast,
        this.northwest,
        this.southeast,
        this.southwest
      ];
    else return [];
  }

  subdivide() {
    this.northeast = new QuadTree(this.boundary.subdivide('ne'), this.capacity);
    this.northwest = new QuadTree(this.boundary.subdivide('nw'), this.capacity);
    this.southeast = new QuadTree(this.boundary.subdivide('se'), this.capacity);
    this.southwest = new QuadTree(this.boundary.subdivide('sw'), this.capacity);
    this.divided = true;
  }

  insert(point) {
    if (!this.boundary.contains(point))
      return false;

    if (this.points.length < this.capacity) {
      this.points.push(point);
      return true;
    }

    if (!this.divided) this.subdivide();

    return (
      this.northeast.insert(point) ||
      this.northwest.insert(point) ||
      this.southeast.insert(point) ||
      this.southwest.insert(point)
    );
  }

  query(range, found) {
    if (!found) found = [];
    if (!range.intersects(this.boundary)) return found;

    for (let p of this.points) {
      if (range.contains(p)) found.push(p);
    }
    if (this.divided) {
      this.northwest.query(range, found);
      this.northeast.query(range, found);
      this.southwest.query(range, found);
      this.southeast.query(range, found);
    }

    return found;
  }

  forEach(fn) {
    this.points.forEach(fn);
    if (this.divided) {
      this.northeast.forEach(fn);
      this.northwest.forEach(fn);
      this.southeast.forEach(fn);
      this.southwest.forEach(fn);
    }
  }

  get length() {
    let count = this.points.length;
    if (this.divided) {
      count += this.northwest.length;
      count += this.northeast.length;
      count += this.southwest.length;
      count += this.southeast.length;
    }
    return count;
  }
}
