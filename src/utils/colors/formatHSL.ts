export const formatHSL = (hsl: [number, number, number]): string => {
  return `HSL (${isNaN(hsl[0]) ? 0 : hsl[0].toFixed(0)}, ${(hsl[1] * 100).toFixed(0)}, ${(
    hsl[2] * 100
  ).toFixed(0)})`;
};
