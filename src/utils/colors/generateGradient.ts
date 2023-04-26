import chroma from 'chroma-js';

export const generateGradient = (startColor: string, endColor: string, numberOfStops: number) => {
  const gradientColors = chroma.scale([startColor, endColor]).mode('lch').colors(numberOfStops);
  return gradientColors;
};
