import Direction from "./Direction";

console.log(Direction);

const directions = [];

for (
  let directionIndex = 0;
  directionIndex < Direction.numDirections;
  directionIndex++
) {
  directions.push(new Direction(directionIndex));
}

export default directions;
