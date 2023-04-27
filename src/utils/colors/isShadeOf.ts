import chroma from 'chroma-js';
import {
  blacks,
  blues,
  browns,
  greens,
  oranges,
  pinks,
  purples,
  reds,
  whites,
  yellows,
} from 'constants';

export const isShadeOf = (color: string) => {
  if (reds.includes(color)) {
    return 'red';
  } else if (blues.includes(color)) {
    return 'blue';
  } else if (greens.includes(color)) {
    return 'green';
  } else if (yellows.includes(color)) {
    return 'yellow';
  } else if (oranges.includes(color)) {
    return 'orange';
  } else if (purples.includes(color)) {
    return 'purple';
  } else if (pinks.includes(color)) {
    return 'pink';
  } else if (browns.includes(color)) {
    return 'brown';
  } else if (blacks.includes(color)) {
    return 'black';
  } else if (whites.includes(color)) {
    return 'white';
  }

  const hsl = chroma(color).hsl();
  const hue = hsl[0];
  const saturation = hsl[1];
  const lightness = hsl[2];
  console.log(hue, saturation, lightness);
  const targetHues = {
    red: [345, 15],
    orange: [15, 45],
    yellow: [45, 60],
    green: [60, 150],
    blue: [150, 240],
    // indigo: [225, 260],
    purple: [240, 290],
    pink: [290, 345],
    brown: [15, 45],
    // black: [0, 360],
    // white: [0, 360]
  };
  if (lightness >= 0.98) {
    return 'white';
  } else if (lightness <= 0.02) {
    return 'black';
  }
  for (const [colorCategory, targetHue] of Object.entries(targetHues)) {
    if (colorCategory === 'red') {
      if (hue >= targetHue[0] || hue <= targetHue[1]) {
        return colorCategory;
      }
    } else if (hue >= targetHue[0] && hue <= targetHue[1]) {
      if (colorCategory === 'orange' && saturation >= 0.6 && lightness >= 0.4) {
        return colorCategory;
      } else if (colorCategory === 'brown' && (saturation < 0.6 || lightness < 0.4)) {
        return colorCategory;
      } else if (colorCategory !== 'orange' && colorCategory !== 'brown') {
        return colorCategory;
      }
    }
  }
  return 'unknown';
};
