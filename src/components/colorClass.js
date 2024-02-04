const getColorClass = (type, category) => {
  return `${type}-${category}`;
};

export const nameColors = (type) => getColorClass(type, "name");
export const techColors = (type) => getColorClass(type, "tech");
export const linkColors = (type) => getColorClass(type, "link");
export const circleColors = (type) => getColorClass(type, "circle");