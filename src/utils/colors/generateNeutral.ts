import chroma, { Color } from 'chroma-js';

export const generateNeutral = (): string => {
  // Generate a random lightness value between 0.2 (dark gray) and 0.8 (light gray)
  const lightness: number = Math.random() * 0.6 + 0.2;

  // Create a gray color with the generated lightness
  const neutralBackground: Color = chroma.hsl(0, 0, lightness);

  // Return the hex code of the color
  return neutralBackground.hex();
};
