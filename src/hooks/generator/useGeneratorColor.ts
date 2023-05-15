import { atom, useAtom } from 'jotai';
import {
  generateBase,
  generateComplementary,
  generateNeutral,
  generateGradient,
  generateHoverColor,
  createLinearGradientCSS,
  generateSplitComplementary,
  adjustColorBrightness,
  getColorBrightness,
} from 'utils';

// accent color
const _baseColor = atom('#0F4C81');
const _primaryButtonColor = atom('#0F4C81');
const _secondaryButtonColor = atom('#FFFFFF');
const _hoverPrimaryButtonColor = atom('#FFFFFF');
const _hoverSecondaryButtonColor = atom('#FFFFFF');
const _accentColor = atom('#FFFFFF');
// const _secondaryAccentColor = atom('#ffffff');
// const _hoverAccentColor = atom('#ffffff');
// const _hoverSecondaryAccentColor = atom('#ffffff');

// text color
const _textColor = atom('#ffffff');
const _secondaryTextColor = atom('#ffffff');
// const _tertiaryTextColor = atom('#ffffff');
const _hoverTextColor = atom('#ffffff');
const _hoverSecondaryTextColor = atom('#ffffff');

// background color
const _backgroundColor = atom('#ffffff');
const _overviewBgColor = atom('#ffffff');

// gradient colors
// const _gradientColors = atom(['#ffffff']);
const _cssGradientColors = atom('#ffffff');

export const useGeneratorColor = () => {
  // base & buttons
  const [baseColor, setBaseColor] = useAtom(_baseColor);
  const [primaryButtonColor, setPrimaryButtonColor] = useAtom(_primaryButtonColor);
  const [hoverPrimaryButtonColor, setHoverPrimaryButtonColor] = useAtom(_hoverPrimaryButtonColor);
  const [secondaryButtonColor, setSecondaryButtonColor] = useAtom(_secondaryButtonColor);
  const [hoverSecondaryButtonColor, setHoverSecondaryButtonColor] = useAtom(
    _hoverSecondaryButtonColor
  );
  const [accentColor, setAccentColor] = useAtom(_accentColor);

  // text color
  const [textColor, setTextColor] = useAtom(_textColor);
  const [secondaryTextColor, setSecondaryTextColor] = useAtom(_secondaryTextColor);
  // const [tertiaryTextColor, setTertiaryTextColor] = useAtom(_tertiaryTextColor);
  const [hoverTextColor, setHoverTextColor] = useAtom(_hoverTextColor);
  const [hoverSecondaryTextColor, setHoverSecondaryTextColor] = useAtom(_hoverSecondaryTextColor);

  // background color
  const [backgroundColor, setBackgroundColor] = useAtom(_backgroundColor);
  const [overviewBgColor, setOverviewBgColor] = useAtom(_overviewBgColor);

  // gradient colors
  // const [gradientColors, setGradientColors] = useAtom(_gradientColors);
  const [cssGradientColors, setCSSGradientColors] = useAtom(_cssGradientColors);

  const generateNewColor = () => {
    // accent color
    const _new = generateBase();
    setBaseColor(_new);

    // primary button
    setPrimaryButtonColor(_new);
    setHoverPrimaryButtonColor(generateHoverColor(_new));

    // secondary button
    const secondaryButton = generateComplementary(_new);
    setSecondaryButtonColor(secondaryButton);
    setHoverSecondaryButtonColor(generateHoverColor(secondaryButton));

    // background color
    const backgroundColor = generateNeutral();
    setBackgroundColor(backgroundColor);
    const overviewBgColor = adjustColorBrightness(
      secondaryButton,
      getColorBrightness(_new) > 0.5 ? -2 : 1
    );
    setOverviewBgColor(overviewBgColor);

    // accent
    const accent = generateSplitComplementary(_new)[1];
    setAccentColor(accent);

    // text color
    const textColor = generateComplementary(backgroundColor);
    setTextColor(textColor);
    const secondaryTextColor = generateComplementary(primaryButtonColor);
    setSecondaryTextColor(secondaryTextColor);
    // const tertiaryTextColor = generateTertiaryTextColor(_new);
    // setTertiaryTextColor(tertiaryTextColor);
    const hoverTextColor = generateHoverColor(textColor);
    setHoverTextColor(hoverTextColor);
    const secondaryHoverTextColor = generateHoverColor(secondaryTextColor);
    setHoverSecondaryTextColor(secondaryHoverTextColor);

    // secondary accent
    // const analogousAccent = generateAnalogous(_new, 30, 5);
    // const secondaryAccent = analogousAccent[0].hex();
    // setSecondaryAccentColor(secondaryAccent);
    // const hoverAccent = generateHoverColor(_new);
    // setHoverAccentColor(hoverAccent);
    // const hoverSecondaryAccentColor = generateHoverColor(secondaryAccent);
    // setHoverSecondaryAccentColor(hoverSecondaryAccentColor);

    // background color
    // setBackgroundColor(generateBackgroundColor(_new));

    // gradient color
    // const endColor = analogousAccent[4].hex();
    // const analogous = generateAnalogous(_new, 15, 3);
    const gradientColors = generateGradient(_new, secondaryButton, 5);
    // const gradientColors = analogous.map((c) => c.hex());
    const cssGradientColor = createLinearGradientCSS(gradientColors, '45deg');
    setCSSGradientColors(cssGradientColor);
    // setGradientColors(analogousAccent.map((c) => c.hex()));
  };

  return {
    baseColor,
    primaryButtonColor,
    hoverPrimaryButtonColor,
    secondaryButtonColor,
    hoverSecondaryButtonColor,
    accentColor,
    // secondaryAccentColor,
    // hoverAccentColor,
    // hoverSecondaryAccentColor,
    textColor,
    secondaryTextColor,
    // tertiaryTextColor,
    hoverTextColor,
    hoverSecondaryTextColor,
    backgroundColor,
    overviewBgColor,
    // gradientColors,
    cssGradientColors,
    setBaseColor,
    generateNewColor,
  };
};
