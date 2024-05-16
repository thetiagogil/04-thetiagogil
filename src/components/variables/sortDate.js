export const sortDate = (data) => {
  // Define the order of months to convert them into numerical values
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

  // Get the current year and month
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  // Sort the data array
  return data.sort((a, b) => {
    // Handle 'Present' and null values for end dates
    const aYearEnd =
      a.yearEnd === "Present" || !a.yearEnd ? currentYear : a.yearEnd;
    const bYearEnd =
      b.yearEnd === "Present" || !b.yearEnd ? currentYear : b.yearEnd;
    const aMonthEnd =
      a.monthEnd === "Present" || !a.monthEnd
        ? currentMonth
        : monthsOrder[a.monthEnd];
    const bMonthEnd =
      b.monthEnd === "Present" || !b.monthEnd
        ? currentMonth
        : monthsOrder[b.monthEnd];

    // Compare end years first
    if (aYearEnd === bYearEnd) {
      // If end years are the same, compare end months
      if (aMonthEnd === bMonthEnd) {
        // If end months are the same, compare start years
        const aYearStart = a.yearStart;
        const bYearStart = b.yearStart;
        const aMonthStart = monthsOrder[a.monthStart];
        const bMonthStart = monthsOrder[b.monthStart];

        // If start years are the same, compare start months
        if (aYearStart === bYearStart) {
          return bMonthStart - aMonthStart; // Descending order of start months
        }
        return bYearStart - aYearStart; // Descending order of start years
      }
      return bMonthEnd - aMonthEnd; // Descending order of end months
    }
    return bYearEnd - aYearEnd; // Descending order of end years
  });
};
