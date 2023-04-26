import chroma from 'chroma-js';

export const generateComplementary = (baseColor: string, lightnessDifference = 0.5) => {
  if (baseColor.startsWith('#')) {
    const baseHSL = chroma(baseColor).hsl();
    const lightness =
      baseHSL[2] > 0.5 ? baseHSL[2] - lightnessDifference : baseHSL[2] + lightnessDifference;
    return chroma.hsl(baseHSL[0], baseHSL[1], lightness).hex();
  }

  return '#FFFFFF';
};
