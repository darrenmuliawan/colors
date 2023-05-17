import chroma from 'chroma-js';
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

// supporting colors
const _successColor = atom('#ffffff');
const _errorColor = atom('#ffffff');
const _warningColor = atom('#ffffff');
const _infoColor = atom('#ffffff');

// text color
const _textColor = atom('#ffffff');
const _secondaryTextColor = atom('#ffffff');
// const _tertiaryTextColor = atom('#ffffff');
const _hoverTextColor = atom('#ffffff');
const _hoverSecondaryTextColor = atom('#ffffff');

// background color
const _backgroundColor = atom('#ffffff');
const _overviewBgColor = atom('#ffffff');

// neutral color
const _neutralColors = atom<string[]>([]);

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

  // supporting colors
  const [successColor, setSuccessColor] = useAtom(_successColor);
  const [errorColor, setErrorColor] = useAtom(_errorColor);
  const [warningColor, setWarningColor] = useAtom(_warningColor);
  const [infoColor, setInfoColor] = useAtom(_infoColor);

  // neutral colors
  const [neutralColors, setNeutralColors] = useAtom(_neutralColors);

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

    // supporting colors
    const mainHSL = chroma(_new).hsl();
    const saturation = Math.max(0.8, mainHSL[1]);
    const lightness = Math.min(0.6, Math.max(0.4, mainHSL[2]));
    const successColor = chroma(120, saturation, lightness, 'hsl').hex();
    setSuccessColor(successColor);
    const errorColor = chroma(0, saturation, lightness, 'hsl').hex();
    setErrorColor(errorColor);
    const warningColor = chroma(38.8, saturation, lightness, 'hsl').hex();
    setWarningColor(warningColor);
    const infoColor = chroma(240, saturation, lightness, 'hsl').hex();
    setInfoColor(infoColor);

    // neutrals
    const midGray = chroma(_new).desaturate(2.5).luminance(0.5).hex();
    const light = chroma(_new).desaturate(2.5).luminance(0.99).hex();
    const dark = chroma(_new).desaturate(2.5).luminance(0.01).hex();
    const neutrals = chroma.scale([light, midGray, dark]).colors(9);
    // const midGray = '#5B6781';
    setNeutralColors(neutrals);

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
    successColor,
    errorColor,
    warningColor,
    infoColor,
    neutralColors,
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
