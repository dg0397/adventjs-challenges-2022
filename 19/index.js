function sortToys(toys, positions) {
  return toys.sort(
    (toy1, toy2) =>
      positions[toys.indexOf(toy1)] - positions[toys.indexOf(toy2)]
  );
}
