import chroma, { Color } from 'chroma-js';

export const generateVibrant = (baseColor: string): string => {
  // Get the base color
  const base: Color = chroma(baseColor);

  // Generate a vibrant complementary color
  let vibrant: Color = base.set('hsl.l', '*1.2').set('hsl.s', '+0.2');

  // If the lightness of the vibrant color is too high, reduce it to keep the color within the visible spectrum
  if (vibrant.get('hsl.l') > 1) {
    vibrant = vibrant.set('hsl.l', 1);
  }

  // Return the color
  return vibrant.hex();
};
