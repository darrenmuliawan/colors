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

  // add listener for spacebar
  document.body.onkeydown = (e) => {
    if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
      e.preventDefault();
      generateNewColor();

      // animate gradient background
      const bg1 = document.getElementById('bg1');
      const bg2 = document.getElementById('bg2');
      if (bg1 && bg2) {
        const bg1opacity = getComputedStyle(bg1).opacity;
        // const bg2opacity = getComputedStyle(bg2!).opacity;
        bg1.style.setProperty('opacity', bg1opacity === '0' ? '1' : '0');
        bg2.style.setProperty('opacity', bg1opacity === '0' ? '0' : '1');
      }
    }
  };

  useEffect(() => {
    generateNewColor();
  }, []);

  const generateNewColor = () => {
    const newColor = generateBase();
    console.log('new color: ', newColor);
    setBaseColor(newColor);
    // setNextBaseColor(generateBase());
  };

  useEffect(() => {
    // secondary accent
    const analogousAccent = generateAnalogous(baseColor, angle, 5);
    console.log(analogousAccent);
    const secondaryAccent = analogousAccent[0].hex();
    setSecondaryAccentColor(secondaryAccent);
    const hoverAccent = generateHoverColor(baseColor);
    setHoverAccentColor(hoverAccent);
    const hoverSecondaryAccentColor = generateHoverColor(secondaryAccent);
    setHoverSecondaryAccentColor(hoverSecondaryAccentColor);

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
    <body style={{ backgroundColor: 'white' }}>
      <Header />
      <Overview baseColor={baseColor} />
      <div className="p-10">
        <section className="mb-10">
          <h2 className="text-black text-5xl">Accent</h2>
          <p className="text-2xl mb-4">
            This color is used to emphasize specific elements, such as buttons, links, or
            interactive components. It should stand out from the background and text colors to draw
            attention to these elements.
          </p>
          <p className="text-2xl">Elements:</p>
          <code className="mb-4">
            {`<a>, <button>, <input>, <select>, <progress>, <mark>, <span>, <svg>, <img>`}
          </code>
          <div className="flex items-center mt-4">
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
        <section className="mb-10">
          <h2 className="text-black text-5xl">Text</h2>
          <p className="text-2xl mb-4">
            This color is used for the main text content on the website. It should have a high
            contrast with the background color to ensure easy readability.
          </p>
          <p className="text-2xl">Elements:</p>
          <code className="mb-4">
            {`<h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <p>, <a>, <li>, <span>, <blockquote>`}
          </code>
          <div className="flex items-center mt-4">
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
        <section className="mb-10">
          <h2 className="text-black text-5xl">Background</h2>
          <p className="text-2xl mb-4">
            This color is used for the main background of the website. It is important to ensure
            that this color provides sufficient contrast with the text and other elements for
            readability and accessibility.
          </p>
          <p className="text-2xl">Elements:</p>
          <code className="mb-4">{`<body>, <header>, <footer>, <section>, <div>`}</code>
          <div className="flex items-center mt-4">
            <div className="mr-2">
              <Palette color={backgroundColor} />
            </div>
          </div>
        </section>
      </div>
    </body>
  );
};
