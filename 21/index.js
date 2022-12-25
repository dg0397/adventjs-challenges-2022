function printTable(gifts) {
  const [maxGameName, maxGameQuantity] = [
    Math.max(...gifts.map((gift) => gift.name.length)),
    Math.max(...gifts.map((gift) => `${gift.quantity}`.length)),
  ];

  const leftLength = maxGameName > 4 ? maxGameName + 4 : 8;
  const rigthLength = maxGameQuantity > 8 ? maxGameQuantity + 3 : 11;

  const totalLength = leftLength + rigthLength;
  const [top, botton] = ["+", "*"].map((val) => `${val.repeat(totalLength)}`);
  let content = `| Gift${" ".repeat(leftLength - 7)}| Quantity${" ".repeat(
    rigthLength - 10
  )}|\n| ${"-".repeat(leftLength - 4)} | ${"-".repeat(rigthLength - 3)} |\n`;

  gifts.forEach(({ name, quantity }) => {
    content += `| ${name}${" ".repeat(
      leftLength - (3 + name.length)
    )}| ${quantity}${" ".repeat(
      rigthLength - (2 + (quantity + "").length)
    )}|\n`;
  });

  return top + "\n" + content + botton;
}
