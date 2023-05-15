import chroma, { Color } from 'chroma-js';

export const generateNeutral = (): string => {
  // Generate a random lightness value between 0.2 (dark gray) and 0.8 (light gray)
  const hue: number = Math.random() * 360;
  const saturation: number = Math.random() * 0.5;
  const lightness: number = Math.random() * 0.2 + 0.8;

  // Create a gray color with the generated lightness
  const neutralBackground: Color = chroma.hsl(hue, saturation, lightness);

  // Return the hex code of the color
  return neutralBackground.hex();
};
