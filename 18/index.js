function dryNumber(dry, numbers) {
  return Array(numbers)
    .fill(1)
    .map((_, i) => i + 1)
    .filter((num) => `${num}`.includes(dry));
}
