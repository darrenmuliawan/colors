import { Palette } from 'components';
import { useEffect, useState } from 'react';
import { Header, Overview } from 'ui';
import { generateAnalogous, generateBase, generateComplementary } from 'utils';
import { generateBackgroundColor } from 'utils/colors/generateBackgroundColor';
import { generateHoverColor } from 'utils/colors/generateHoverColor';
import { generateTertiaryTextColor } from 'utils/colors/generateTertiaryTextColor';

export const GeneratorPage = () => {
  // const baseColor = '#FFA726'; // Orange
  const angle = 30;

  // base color
  const [baseColor, setBaseColor] = useState('#ffffff');
  const [secondaryAccentColor, setSecondaryAccentColor] = useState('#ffffff');
  const [hoverAccentColor, setHoverAccentColor] = useState('#ffffff');
  const [hoverSecondaryAccentColor, setHoverSecondaryAccentColor] = useState('#ffffff');

  // text color
  const [textColor, setTextColor] = useState('#ffffff');
  const [secondaryTextColor, setSecondaryTextColor] = useState('#ffffff');
  const [tertiaryTextColor, setTertiaryTextColor] = useState('#ffffff');
  const [hoverTextColor, setHoverTextColor] = useState('#ffffff');
  const [hoverSecondaryTextColor, setHoverSecondaryTextColor] = useState('#ffffff');

  // background color
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  // gradient color
  const [gradientColors, setGradientColors] = useState(['#ffffff']);

  // add listener for spacebar
  document.body.onkeydown = (e) => {
    if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
      e.preventDefault();
      generateNewColor();
    }
  };

  useEffect(() => {
    generateNewColor();
  }, []);

  const generateNewColor = () => {
    setBaseColor(generateBase());
  };

  useEffect(() => {
    // secondary accent
    const analogousAccent = generateAnalogous(baseColor, angle, 5);
    const secondaryAccent = analogousAccent[0].hex();
    setSecondaryAccentColor(secondaryAccent);
    const hoverAccent = generateHoverColor(baseColor);
    setHoverAccentColor(hoverAccent);
    const hoverSecondaryAccentColor = generateHoverColor(secondaryAccent);
    setHoverSecondaryAccentColor(hoverSecondaryAccentColor);

    // gradient color
    setGradientColors(analogousAccent.map((c) => c.hex()));

    // text color
    const textColor = generateComplementary(baseColor);
    setTextColor(textColor);
    const secondaryTextColor = generateComplementary(secondaryAccent);
    setSecondaryTextColor(secondaryTextColor);
    const tertiaryTextColor = generateTertiaryTextColor(baseColor);
    setTertiaryTextColor(tertiaryTextColor);
    const hoverTextColor = generateHoverColor(textColor);
    setHoverTextColor(hoverTextColor);
    const secondaryHoverTextColor = generateHoverColor(secondaryTextColor);
    setHoverSecondaryTextColor(secondaryHoverTextColor);

    // background color
    setBackgroundColor(generateBackgroundColor(baseColor));
  }, [baseColor]);

  return (
    <body>
      <Header />
      <Overview baseColor={baseColor} />
      <div className="p-5">
        <section className="mb-4">
          <h2>Accent</h2>
          <div className="flex items-center">
            <div className="mr-2">
              <Palette color={baseColor} label="Primary Accent" />
            </div>
            <div className="mr-2">
              <Palette color={hoverAccentColor} label="Hover P. Accent" />
            </div>
            <div className="mr-2">
              <Palette color={secondaryAccentColor} label="Secondary Accent" />
            </div>
            <div className="mr-2">
              <Palette color={hoverSecondaryAccentColor} label="Hover S. Accent" />
            </div>
          </div>
        </section>
        <section className="mb-4">
          <h2>Gradients</h2>
          <div className="flex items-center">
            {gradientColors.map((gradient, index) => (
              <div className="mr-2" key={`gradient-${index}`}>
                <Palette color={gradient} />
              </div>
            ))}
          </div>
        </section>
        <section className="mb-4">
          <h2>Text</h2>
          <div className="flex items-center">
            <div className="mr-2">
              <Palette color={textColor} label="Primary Text" />
            </div>
            <div className="mr-2">
              <Palette color={hoverTextColor} label="Hover P. Text" />
            </div>
            <div className="mr-2">
              <Palette color={secondaryTextColor} label="Secondary Text" />
            </div>
            <div className="mr-2">
              <Palette color={hoverSecondaryTextColor} label="Hover S. Text" />
            </div>
            <div className="mr-2">
              <Palette color={tertiaryTextColor} label="Tertiary Text" />
            </div>
          </div>
        </section>
        <section className="mb-4">
          <h2>Background</h2>
          <div className="flex items-center">
            <div className="mr-2">
              <Palette color={backgroundColor} />
            </div>
          </div>
        </section>
      </div>
    </body>
  );
};
