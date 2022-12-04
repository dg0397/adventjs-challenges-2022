function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    (reindeers.join("").length * 2) /
      packOfGifts.reduce((acc, gift) => (acc += gift.length), 0)
  );
}
