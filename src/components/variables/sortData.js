export const sortData = (data) => {
  const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  data.sort((a, b) => {
    if (a.yearStart !== b.yearStart) {
      return parseInt(b.yearStart) - parseInt(a.yearStart);
    }

    // If start years are the same, compare by start month in descending order
    const monthStartA = monthOrder.indexOf(a.monthStart);
    const monthStartB = monthOrder.indexOf(b.monthStart);
    if (monthStartA !== monthStartB) {
      return monthStartB - monthStartA;
    }

    // If both start year and start month are the same, compare by end year in descending order
    if (a.yearEnd !== null && b.yearEnd !== null) {
      if (a.yearEnd !== b.yearEnd) {
        return parseInt(b.yearEnd) - parseInt(a.yearEnd);
      }
    } else if (a.yearEnd !== null && b.yearEnd === null) {
      return -1; 
    } else if (a.yearEnd === null && b.yearEnd !== null) {
      return 1; 
    }

    // If both have end years and are the same, compare by end month in descending order
    if (a.monthEnd && b.monthEnd) {
      const monthEndA = monthOrder.indexOf(a.monthEnd);
      const monthEndB = monthOrder.indexOf(b.monthEnd);
      return monthEndB - monthEndA;
    }

    return 0;
  });

  return data
};