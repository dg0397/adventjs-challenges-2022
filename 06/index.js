function createCube(size) {
  return [
    ...Array(size)
      .fill("")
      .map(
        (_, i) =>
          " ".repeat(size - i - 1) + "/\\".repeat(i + 1) + "_\\".repeat(size)
      ),
    ...Array(size)
      .fill("")
      .map(
        (_, i) =>
          " ".repeat(size - i - 1) + "\\/".repeat(i + 1) + "_/".repeat(size)
      )
      .reverse(),
  ].join("\n");
}
