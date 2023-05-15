import chroma from 'chroma-js';

export const adjustColorBrightness = (color: string, adjustment: number): string => {
  if (adjustment > 0) {
    return chroma(color).brighten(adjustment).hex();
  } else if (adjustment < 0) {
    return chroma(color).darken(Math.abs(adjustment)).hex();
  } else {
    return color;
  }
};
