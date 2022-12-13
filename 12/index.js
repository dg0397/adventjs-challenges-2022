function selectSleigh(distance, sleighs) {
  return [
    { name: null },
    ...sleighs.filter((sleighs) => sleighs.consumption * distance <= 20),
  ].at(-1).name;
}
