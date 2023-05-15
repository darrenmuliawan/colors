import chroma from 'chroma-js';

export const generateSplitComplementary = (baseColor: string): string[] => {
  const baseHue = chroma(baseColor).get('hsl.h');
  const splitComplementaryHues = [(baseHue + 150) % 360, (baseHue + 210) % 360];

  return splitComplementaryHues.map((hue) => chroma.hsl(hue, 1, 0.5).hex());
};
