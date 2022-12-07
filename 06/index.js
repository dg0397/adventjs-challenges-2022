function createCube(size) {
  let [top, bottom] = [[], []];

  for (let i = 1; i <= size; i++) {
    top.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size));
    bottom.push(" ".repeat(size - i) + "\\/".repeat(i) + "_/".repeat(size));
  }

  return [...top, ...bottom.reverse()].join("\n");
}
