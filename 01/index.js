function wrapping(gifts) {
  return gifts.map((gift) => {
    const wrapper = "*".repeat(gift.length);
    return `*${wrapper}*\n*${gift}*\n*${wrapper}*`;
  });
}
