import chroma from 'chroma-js';

export const getColorBrightness = (color: string): number => {
  return chroma(color).luminance();
};
