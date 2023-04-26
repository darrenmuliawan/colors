import chroma from 'chroma-js';

export const generateAnalogous = (baseColor: string, angle = 30, numColors = 3) => {
  console.log('base color: ', baseColor);
  if (baseColor && baseColor.startsWith('#')) {
    const baseHue = chroma(baseColor).get('hsl.h');
    const hues = [baseHue];

    for (let i = 1; i < numColors; i++) {
      hues.push((baseHue + angle * i) % 360);
    }

    return hues.map((hue) => chroma.hsl(hue, 1, 0.5));
  }
  return [];
};
