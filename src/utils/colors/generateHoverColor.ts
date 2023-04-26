import chroma from 'chroma-js';

export const generateHoverColor = (textColor: string) => {
  const color = chroma(textColor);
  const brightness = color.get('lab.l'); // Calculate the brightness of the text color

  let hoverColor;

  if (brightness > 50) {
    // If the text color is light, darken it for the hover effect
    hoverColor = color.darken(0.8);
  } else {
    // If the text color is dark, lighten it for the hover effect
    hoverColor = color.brighten(0.8);
  }

  return hoverColor.hex();
};
