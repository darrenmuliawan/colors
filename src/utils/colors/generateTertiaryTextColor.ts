import chroma from 'chroma-js';

export const generateTertiaryTextColor = (baseColor: string) => {
  const color = chroma(baseColor);
  const brightness = color.get('lab.l'); // Calculate the brightness of the base color

  let tertiaryColor;

  if (brightness > 50) {
    // If the base color is light, blend it with black to decrease the contrast
    tertiaryColor = chroma.mix(baseColor, '#000000', 0.6);
  } else {
    // If the base color is dark, blend it with white to decrease the contrast
    tertiaryColor = chroma.mix(baseColor, '#FFFFFF', 0.6);
  }

  return tertiaryColor.hex();
};
