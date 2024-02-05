export const dateSorter = (data) => {
  const monthsOrder = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  const dataSorted = [...data].sort((a, b) => {
    // DECONSTRUCT ELEMENTS
    const [aYear, aMonth] = a.date.split(" "); // EXAMPLE: ["2023", "Sep"]
    const [bYear, bMonth] = b.date.split(" "); // EXAMPLE: ["2023", "Oct"]

    // FIRST CHECKS IF YEAR IS THE SAME
    const yearComparison = bYear.localeCompare(aYear);

    // IF YEAR IS NOT THE SAME, RETURN YEAR DIFFERENCE
    if (yearComparison !== 0) {
      return yearComparison;
    }

    // SECOND CHECKS IF MONTH IS THE SAME
    const monthComparison = bMonth.localeCompare(aMonth);

    // IF MONTH IS NOT THE SAME, RETURN MONTH DIFFERENCE
    if (monthComparison !== 0) {
      return monthsOrder[bMonth] - monthsOrder[aMonth];
    }

    // THIRD CHECKS NAME
    const nameComparison = b.name.localeCompare(a.name);

    // RETURN NAME DIFFERENCE
    return nameComparison;
  });

  return dataSorted;
};
