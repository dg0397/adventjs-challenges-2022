function howManyReindeers(reindeerTypes, gifts) {
  reindeerTypes = reindeerTypes.sort(
    (a, b) => b.weightCapacity - a.weightCapacity
  );
  const result = gifts.map(({ country, weight }) => {
    let currentWeight = weight;
    const reindeerCapacityAvailable = reindeerTypes.filter(
      (r) => r.weightCapacity < weight
    );
    let currentCapacity = reindeerCapacityAvailable.reduce((acc, r) => {
      return acc + r.weightCapacity;
    }, 0);
    let reindeers = reindeerCapacityAvailable.map((r) => {
      const num = (currentWeight / currentCapacity) >> 0;
      currentCapacity -= r.weightCapacity;
      currentWeight -= num * r.weightCapacity;
      return {
        type: r.type,
        num,
      };
    });
    return {
      country,
      reindeers,
    };
  });
  return result;
}
/* ANOTHER SOLUTION
function howManyReindeers(reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity);

  return gifts.map(({ country, weight }) => {
    const values = reindeerTypes
      .map((reindeer) => reindeer.weightCapacity)
      .reverse();
    let combination = [1];
    values.slice(1).forEach((num) => {
      num < weight && combination.push(0);
    });

    combination[combination.length - 1] = Math.trunc(
      (weight * 0.9) / values[combination.length - 1]
    );

    let balance = combination.reduce(
      (acc, num, index) => acc + num * values[index],
      0
    );

    while (balance < weight) {
      console.log(combination);
      combination = combination.map((num, index) => {
        if (index === 0) return num;
        if (
          num + 1 <= combination[index - 1] &&
          balance + values[index] < weight
        ) {
          balance = balance + values[index];
          return num + 1;
        }
        if (
          index === combination.length - 1 &&
          combination[index - 1] === 0 &&
          num - 1 > 0
        ) {
          balance = balance - values[index];
          return num - 1;
        }
        return num;
      });
      combination[0] = combination[0] + 1;
      balance = combination.reduce(
        (acc, num, index) => acc + num * values[index],
        0
      );
    }
    const reindeerTypesSelected = reindeerTypes.slice(
      reindeerTypes.length - combination.length
    );
    combination.reverse();
    return {
      country,
      reindeers: combination.map((num, index) => {
        return {
          type: reindeerTypesSelected[index]["type"],
          num,
        };
      }),
    };
  });
}*/
