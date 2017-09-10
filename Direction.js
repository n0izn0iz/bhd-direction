export default class Direction {
  constructor(index) {
    this.index = index;
    this.name = Direction.nameFromIndex(index);
  }

  static nameFromIndex(index) {
    switch (index) {
      case Direction.topLeftIndex:
        return "topLeft";
      case Direction.topRightIndex:
        return "topRight";
      case Direction.bottomRightIndex:
        return "bottomRight";
      case Direction.bottomLeftIndex:
        return "topLeft";
    }
  }

  static get topLeftIndex() {
    return 0;
  }

  static get topRightIndex() {
    return 1;
  }

  static get bottomRightIndex() {
    return 2;
  }

  static get bottomLeftIndex() {
    return 3;
  }

  static get numDirections() {
    return 4;
  }
}
