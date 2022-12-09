function getGiftsToRefill(a1, a2, a3) {
  return [...new Set(a1.concat(a2).concat(a3))].filter(
    (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) < 2
  );
}