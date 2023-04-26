import chroma from 'chroma-js';

export const generateTextColor = (baseColor: string) => {
  if (baseColor.startsWith('#')) {
    const color = chroma(baseColor);
    const brightness = color.get('lab.l'); // Calculate the brightness of the base color

    // If the brightness is greater than a certain threshold, use black as the high contrast color, otherwise use white
    return brightness > 50 ? '#000000' : '#FFFFFF';
  }

  return '#FFFFFF';
};
