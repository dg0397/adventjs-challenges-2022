function decorateTree(base) {
  const dictionary = {
    "B P": "R",
    "P B": "R",
    "R P": "B",
    "P R": "B",
    "B R": "P",
    "R B": "P",
    "P P": "P",
    "R R": "R",
    "B B": "B",
  };
  return base
    .split(" ")
    .splice(1)
    .reduce(
      (acc, step, index) => {
        return [
          ...acc,
          acc[index]
            .split(" ")
            .map((val, i, array) => dictionary[val + " " + array[i + 1]])
            .filter((val) => val)
            .join(" "),
        ];
      },
      [base]
    )
    .reverse();
}
