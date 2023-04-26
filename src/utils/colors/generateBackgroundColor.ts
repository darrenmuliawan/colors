import chroma from 'chroma-js';

export const generateBackgroundColor = (baseColor: string) => {
  const color = chroma(baseColor);
  const brightness = color.get('lab.l'); // Calculate the brightness of the base color

  // Map the brightness to a value between 0 (black) and 1 (white)
  const mappedBrightness = brightness / 100;

  // Create a color gradient between black and white
  const gradient = chroma.scale(['#000000', '#FFFFFF']);

  // Get the intermediate color based on the mapped brightness
  const intermediateColor = gradient(mappedBrightness);

  return intermediateColor.hex();
};
