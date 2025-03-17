import { capFirstLetter } from "./cap-first-letter";

export const getDateMonth = (date: Date, locale: string = "en") =>
  date instanceof Date
    ? capFirstLetter(new Intl.DateTimeFormat(locale, { month: "short" }).format(date).replace(".", ""))
    : null;

export const getDateYear = (date: Date) => (date instanceof Date ? date.getFullYear() : null);
