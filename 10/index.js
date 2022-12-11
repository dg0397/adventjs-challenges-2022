function checkJump(heights) {
  const maxValIndex = heights.indexOf(Math.max(...heights));

  return maxValIndex === heights.length - 1 || maxValIndex === 0
    ? false
    : heights.every((height, index) => {
        if (index === 0) return true;

        return index <= maxValIndex
          ? height >= heights[index - 1]
          : height <= heights[index - 1];
      });
}
