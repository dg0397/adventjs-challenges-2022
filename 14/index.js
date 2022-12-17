function getOptimalPath(path) {
  const reversedPath = path.reverse();
  return reversedPath.slice(1).reduce((acc, step) => {
    acc = step.map((num, i) => Math.min(acc[i], acc[i + 1]) + num);
    return acc;
  }, path[0])[0];
}
