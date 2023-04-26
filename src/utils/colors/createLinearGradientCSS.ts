export const createLinearGradientCSS = (gradientColors: string[], direction = 'to right') => {
  const gradientStops = gradientColors.join(', ');
  return `linear-gradient(${direction}, ${gradientStops})`;
};
