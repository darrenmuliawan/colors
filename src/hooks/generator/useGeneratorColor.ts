import { atom, useAtom } from 'jotai';
import { generateAnalogous, generateBase, generateComplementary } from 'utils';
import { createLinearGradientCSS } from 'utils/colors/createLinearGradientCSS';
import { generateBackgroundColor } from 'utils/colors/generateBackgroundColor';
import { generateGradient } from 'utils/colors/generateGradient';
import { generateHoverColor } from 'utils/colors/generateHoverColor';
import { generateTertiaryTextColor } from 'utils/colors/generateTertiaryTextColor';

// accent color
const _baseColor = atom('#ffffff');
const _secondaryAccentColor = atom('#ffffff');
const _hoverAccentColor = atom('#ffffff');
const _hoverSecondaryAccentColor = atom('#ffffff');

// text color
const _textColor = atom('#ffffff');
const _secondaryTextColor = atom('#ffffff');
const _tertiaryTextColor = atom('#ffffff');
const _hoverTextColor = atom('#ffffff');
const _hoverSecondaryTextColor = atom('#ffffff');

// background color
const _backgroundColor = atom('#ffffff');

// gradient colors
const _gradientColors = atom(['#ffffff']);
const _cssGradientColors = atom('#ffffff');

export const useGeneratorColor = () => {
  const [baseColor, setBaseColor] = useAtom(_baseColor);
  const [secondaryAccentColor, setSecondaryAccentColor] = useAtom(_secondaryAccentColor);
  const [hoverAccentColor, setHoverAccentColor] = useAtom(_hoverAccentColor);
  const [hoverSecondaryAccentColor, setHoverSecondaryAccentColor] = useAtom(
    _hoverSecondaryAccentColor
  );

  // text color
  const [textColor, setTextColor] = useAtom(_textColor);
  const [secondaryTextColor, setSecondaryTextColor] = useAtom(_secondaryTextColor);
  const [tertiaryTextColor, setTertiaryTextColor] = useAtom(_tertiaryTextColor);
  const [hoverTextColor, setHoverTextColor] = useAtom(_hoverTextColor);
  const [hoverSecondaryTextColor, setHoverSecondaryTextColor] = useAtom(_hoverSecondaryTextColor);

  // background color
  const [backgroundColor, setBackgroundColor] = useAtom(_backgroundColor);

  // gradient colors
  const [gradientColors, setGradientColors] = useAtom(_gradientColors);
  const [cssGradientColors, setCSSGradientColors] = useAtom(_cssGradientColors);

  const generateNewColor = () => {
    // accent color
    const _new = generateBase();
    setBaseColor(_new);

    // secondary accent
    const analogousAccent = generateAnalogous(_new, 30, 5);
    const secondaryAccent = analogousAccent[0].hex();
    setSecondaryAccentColor(secondaryAccent);
    const hoverAccent = generateHoverColor(_new);
    setHoverAccentColor(hoverAccent);
    const hoverSecondaryAccentColor = generateHoverColor(secondaryAccent);
    setHoverSecondaryAccentColor(hoverSecondaryAccentColor);

    // text color
    const textColor = generateComplementary(_new);
    setTextColor(textColor);
    const secondaryTextColor = generateComplementary(secondaryAccent);
    setSecondaryTextColor(secondaryTextColor);
    const tertiaryTextColor = generateTertiaryTextColor(_new);
    setTertiaryTextColor(tertiaryTextColor);
    const hoverTextColor = generateHoverColor(textColor);
    setHoverTextColor(hoverTextColor);
    const secondaryHoverTextColor = generateHoverColor(secondaryTextColor);
    setHoverSecondaryTextColor(secondaryHoverTextColor);

    // background color
    setBackgroundColor(generateBackgroundColor(_new));

    // gradient color
    const endColor = analogousAccent[4].hex();
    const gradientColors = generateGradient(_new, endColor, 5);
    const cssGradientColor = createLinearGradientCSS(gradientColors, '45deg');
    setCSSGradientColors(cssGradientColor);
    setGradientColors(analogousAccent.map((c) => c.hex()));
  };

  return {
    baseColor,
    secondaryAccentColor,
    hoverAccentColor,
    hoverSecondaryAccentColor,
    textColor,
    secondaryTextColor,
    tertiaryTextColor,
    hoverTextColor,
    hoverSecondaryTextColor,
    backgroundColor,
    gradientColors,
    cssGradientColors,
    setBaseColor,
    generateNewColor,
  };
};
