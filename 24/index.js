function canExit(maze) {
  const copyMaze = [...maze];
  let answer = false;
  const traverse = (row, column) => {
    copyMaze[row] &&
      copyMaze[row][column] === " " &&
      ((copyMaze[row][column] = "X"),
      traverse(row - 1, column),
      traverse(row, column - 1),
      traverse(row + 1, column),
      traverse(row, column + 1));

    copyMaze[row] && copyMaze[row][column] === "E" && (answer = true);
  };
  const r = copyMaze.findIndex((row) => row.includes("S"));
  const c = copyMaze[r].findIndex((val) => val === "S");
  copyMaze[r][c] = " ";
  traverse(r, c);
  return answer;
}

function canExit(maze) {
  let answer = false;
  const traverse = ({ r, c }) => {
    maze[r] &&
      maze[r][c] === " " &&
      ((maze[r][c] = "X"),
      [
        { r: r - 1, c },
        { r, c: c - 1 },
        { r: r + 1, c },
        { r, c: c + 1 },
      ].forEach(traverse));

    maze[r] && maze[r][c] === "E" && (answer = true);
  };
  const r = maze.findIndex((row) => row.includes("S"));
  const c = maze[r].findIndex((val) => val === "S");
  maze[r][c] = " ";
  traverse({ r, c });
  return answer;
}

function canExit(maze) {
  const entryRow = maze.findIndex((inner) => inner.indexOf("S") >= 0);
  const entryCol = maze[entryRow].findIndex((inner) => inner.indexOf("S") >= 0);
  const entry = [entryCol, entryRow];

  function goTo([x, y]) {
    const result = maze[y][x] === "E";

    delete maze[y][x];
    const movements = [
      [x + 1, y],
      [x - 1, y],
      [x, y - 1],
      [x, y + 1],
    ];
    return (
      result +
      movements
        .filter((move) => maze[move[1]])
        .filter((move) => [" ", "E"].includes(maze[move[1]][move[0]]))
        .some(goTo)
    );
  }

  const result = goTo(entry);

  return !!result;
}
