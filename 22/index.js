function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every(
    (name, index) =>
      stepNumbers[systemNames.indexOf(name)] <= stepNumbers[index]
  );
}
