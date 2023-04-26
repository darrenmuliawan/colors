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
  const [cssGradientColors, setCSSGradientColors] = useState('#ffffff');

  useEffect(() => {
    const endColor = generateAnalogous(baseColor, 30, 4)[3].hex();
    const gradientColors = generateGradient(baseColor, endColor, 5);
    const cssGradientColor = createLinearGradientCSS(gradientColors, '45deg');
    setCSSGradientColors(cssGradientColor);
  }, [baseColor]);

  return (
    <section
      className="flex flex-col justify-center items-center h-[40vh] w-full"
      id="overview"
      style={{
        background: cssGradientColors,
      }}
    >
      <div className="mb-4 flex items-center justify-center">
        <div
          className="rounded-lg h-[2.5rem] w-[2.5rem] mr-2 border-2 border-solid shadow-2xl"
          style={{
            backgroundColor: baseColor,
            borderColor: generateTextColor(baseColor),
          }}
        ></div>
        <h1
          className="text-5xl mb-0"
          style={{
            color: generateTextColor(baseColor),
          }}
        >
          {BASE_COLOR[baseColor]}
        </h1>
      </div>
      <h2
        className="text-3xl"
        style={{
          color: generateTextColor(baseColor),
        }}
      >
        {baseColor}
      </h2>
      <button
        className="px-10 py-4 mt-8 bg-white rounded-full shadow-2xl"
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
    </section>
  );
};
