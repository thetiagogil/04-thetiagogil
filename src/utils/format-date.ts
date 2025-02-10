export const getDateMonth = (date: Date) =>
  date instanceof Date ? new Intl.DateTimeFormat("en-US", { month: "short" }).format(date) : null;

export const getDateYear = (date: Date) => (date instanceof Date ? date.getFullYear() : null);
