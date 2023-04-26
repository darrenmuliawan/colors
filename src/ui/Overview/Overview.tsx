import { Palette } from 'components';
import { BASE_COLOR } from 'constants';
import { useEffect, useState } from 'react';
import { generateAnalogous, generateTextColor } from 'utils';
import { createLinearGradientCSS } from 'utils/colors/createLinearGradientCSS';
import { generateGradient } from 'utils/colors/generateGradient';

interface OverviewProps {
  baseColor: string;
}

export const Overview = (props: OverviewProps) => {
  const { baseColor } = props;

  // gradient colors
  const [gradientColors, setGradientColors] = useState(['#ffffff']);
  const [cssGradientColors, setCSSGradientColors] = useState('#ffffff');

  useEffect(() => {
    const analogousColors = generateAnalogous(baseColor, 30, 5);
    const endColor = analogousColors[4].hex();
    const gradientColors = generateGradient(baseColor, endColor, 5);
    const cssGradientColor = createLinearGradientCSS(gradientColors, '45deg');
    setCSSGradientColors(cssGradientColor);
    setGradientColors(analogousColors.map((c) => c.hex()));
  }, [baseColor]);

  return (
    <section
      className="relative flex flex-col justify-center items-center h-[40vh] m-5 rounded-lg"
      id="overview"
    >
      <div
        className="absolute h-full w-full transition-all ease-in duration-500 z-0 rounded-lg opacity-0"
        style={{
          background: cssGradientColors,
        }}
        id="bg1"
      ></div>
      <div
        className="absolute h-full w-full transition-all ease-in duration-500 z-0 rounded-lg opacity-100"
        style={{
          background: cssGradientColors,
        }}
        id="bg2"
      ></div>
      <div className="mb-4 flex items-center justify-center z-10">
        <Palette
          color={baseColor}
          withLabel={false}
          className="rounded-lg mr-2 border-2 border-solid shadow-2xl"
          style={{
            borderColor: generateTextColor(baseColor),
          }}
          size={40}
        />
        <h1
          className="text-5xl mb-0 z-10"
          style={{
            color: generateTextColor(baseColor),
          }}
        >
          {BASE_COLOR[baseColor]}
        </h1>
      </div>
      <h2
        className="text-3xl z-10"
        style={{
          color: generateTextColor(baseColor),
        }}
      >
        {baseColor}
      </h2>
      <button
        className="px-10 py-4 mt-8 bg-white rounded-full shadow-2xl z-10"
        style={{
          backgroundColor: generateTextColor(baseColor),
        }}
      >
        <span
          className="gradient-text text-2xl font-bold cursor-pointer"
          style={{
            background: cssGradientColors,
          }}
        >
          Press &apos;Space&apos; to generate new color
        </span>
      </button>
      <section className="absolute bottom-5 left-5">
        <div className="flex items-center">
          {gradientColors.map((gradient, index) => (
            <div className="mr-2" key={`gradient-${index}`}>
              <Palette
                color={gradient}
                size={32}
                withLabel={false}
                className="border-2 border-solid"
                style={{
                  borderColor: generateTextColor(baseColor),
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
