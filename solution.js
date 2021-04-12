const { puzzles } = require('./puzzles');

function turnPuzzle(puzzle) {
  const edgeKeys = Object.keys(puzzle.edges);
  const edgeValues = Object.values(puzzle.edges);
  edgeValues.unshift(edgeValues.pop());
  puzzle.edges = Object.fromEntries(
    edgeKeys.map((_, i) => [edgeKeys[i], edgeValues[i]])
  );
  return puzzle;
}

function solvePuzzle(puzzles) {
  const result = [];

  result.push(puzzles[0]);
  while (puzzles[0].edges.top || puzzles[0].edges.left) {
    turnPuzzle(result[0]);
  }

  return result;
}

solvePuzzle(puzzles);
