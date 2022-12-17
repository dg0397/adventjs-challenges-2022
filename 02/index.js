function countHours(year, holidays) {
  return holidays.reduce((acc, holiday) => {
    const day = new Date(`${holiday}/${year}`).getDay();
    return day !== 0 && day !== 6 ? (acc += 2) : acc;
  }, 0);
}
/*
function countHours(year, holidays) {
  return holidays
    .reduce((acc, holiday) => {
      [1, 2, 3, 4, 5].includes(new Date(holiday + "-" + year).getDay()) &&
        acc.push(2);
      return acc;
    }, [])
    .reduce((acc, b) => acc + b, 0);
}

function countHours(year, holidays) {
  return (
    holidays.filter((holiday) => new Date(holiday + "/" + year).getDay() % 6)
      .length * 2
  );
}
*/