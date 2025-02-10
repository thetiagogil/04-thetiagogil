export const getColorTransparency = (hex: string, percentage: number) => {
  if (!hex?.startsWith("#")) hex = `#${hex}`;
  const alpha = Math.round((percentage / 100) * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${alpha}` as string;
};
