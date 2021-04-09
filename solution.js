const puzzle = {
  id: 8,
  edges: {
    top: { edgeTypeId: 8, type: 'inside' },
    left: { edgeTypeId: 38, type: 'outside' },
    right: null,
    bottom: null,
  },
};

function turnPuzzle(puzzle) {
  const arrOfEdges = Object.entries(puzzle.edges);
  //   arrOfEdges.push(arrOfEdges.shift());
  console.log(arrOfEdges.shift());
}

turnPuzzle(puzzle);
