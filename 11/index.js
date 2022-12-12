function getCompleted(part, total) {
  const getSeconds = (time) => time[0] * 3600 + time[1] * 60 + time[2] * 1;
  let numerador = getSeconds(part.split(":"));
  let denominador = getSeconds(total.split(":"));

  let divisor = numerador;
  let b = denominador;
  let r = 0;

  while (b) {
    r = divisor % b;
    divisor = b;
    b = r;
  }

  return numerador / divisor + "/" + denominador / divisor;
}
