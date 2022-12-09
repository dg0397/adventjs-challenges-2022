function checkPart(part) {
  return [...part].some((_, index) => {
    const newWord = part.slice(0, index) + part.slice(index + 1);
    return [...newWord].reverse().join("") === newWord;
  });
}
