function countTime(leds) {
  if (leds.reduce((acc, led) => acc + led, 0) === leds.length) return 0;

  let newLeds = leds.map((led, index) => (leds.at(index - 1) === 1 ? 1 : led));

  return 7 + countTime(newLeds);
}
