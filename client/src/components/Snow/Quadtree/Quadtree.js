import Rectangle from "./Rectangle";

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
    // console.log(point)
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
      if (range.contains(p)) {
        found.push(p);
      }
    }
    if (this.divided) {
      this.northwest.query(range, found);
      this.northeast.query(range, found);
      this.southwest.query(range, found);
      this.southeast.query(range, found);
    }

    return found;
  }

  closest(searchPoint, maxCount = 1, maxDistance = Infinity) {
    if (typeof searchPoint === "undefined") {
      throw TypeError("Method 'closest' needs a point");
    }

    return this.kNearest(searchPoint, maxCount, maxDistance, 0, 0).found;
  }

  kNearest(searchPoint, maxCount, maxDistance, furthestDistance, foundSoFar) {
    let found = [];

    this.children.sort((a, b) => a.boundary.distanceFrom(searchPoint) - b.boundary.distanceFrom(searchPoint))
      .forEach((child) => {
        const distance = child.boundary.distanceFrom(searchPoint);
        if (distance > maxDistance) {
          return;
        } else if (foundSoFar < maxCount || distance < furthestDistance) {
          const result = child.kNearest(searchPoint, maxCount, maxDistance, furthestDistance, foundSoFar);
          const childPoints = result.found;
          found = found.concat(childPoints);
          foundSoFar += childPoints.length;
          furthestDistance = result.furthestDistance;
        }
      });

    this.points.sort((a, b) => a.distanceFrom(searchPoint) - b.distanceFrom(searchPoint))
      .forEach((p) => {
        const distance = p.distanceFrom(searchPoint);
        if (distance > maxDistance) {
          return;
        } else if (foundSoFar < maxCount || distance < furthestDistance) {
          found.push(p);
          furthestDistance = Math.max(distance, furthestDistance);
          foundSoFar++;
        }
      });

    return {
      found: found.sort((a, b) => a.distanceFrom(searchPoint) - b.distanceFrom(searchPoint)).slice(0, maxCount),
      furthestDistance
    };
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

  merge(other, capacity) {
    let left = Math.min(this.boundary.left, other.boundary.left);
    let right = Math.max(this.boundary.right, other.boundary.right);
    let top = Math.min(this.boundary.top, other.boundary.top);
    let bottom = Math.max(this.boundary.bottom, other.boundary.bottom);
    let height = bottom - top;
    let width = right - left;
    let midX = left + width / 2;
    let midY = top + height / 2;
    let boundary = new Rectangle(midX, midY, width, height);
    let result = new QuadTree(boundary, capacity);
    this.forEach(point => result.insert(point));
    other.forEach(point => result.insert(point));

    return result;
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
