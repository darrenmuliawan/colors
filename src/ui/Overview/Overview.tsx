import { Button, Palette, RGBText } from 'components';
import { BASE_COLOR, COLOR_BRAND_EXPLANATION } from 'constants';
import { generateTextColor, isShadeOf, smoothScroll } from 'utils';

interface OverviewProps {
  baseColor: string;
  generateNewColor: () => void;
  cssGradientColors: string;
  gradientColors: string[];
}

export const Overview = (props: OverviewProps) => {
  const { baseColor, generateNewColor, cssGradientColors, gradientColors } = props;

  return (
    <section className="relative flex flex-col justify-center items-center h-[100vh]" id="overview">
      <div
        className="absolute h-full w-full transition-all ease-in duration-500 z-0 opacity-0"
        style={{
          background: cssGradientColors,
        }}
        id="bg1"
      ></div>
      <div
        className="absolute h-full w-full transition-all ease-in duration-500 z-0 opacity-100"
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
          {BASE_COLOR[baseColor].name}
        </h1>
      </div>
      <RGBText
        text={baseColor}
        color={generateTextColor(baseColor)}
        className="text-3xl mb-8 z-10 font-normal"
      />
      <h2
        className="text-2xl z-10 w-[65%] text-center"
        style={{
          color: generateTextColor(baseColor),
        }}
      >
        {COLOR_BRAND_EXPLANATION[isShadeOf(baseColor)]}
      </h2>
      <section className="absolute bottom-10 w-full flex justify-between px-10">
        <div className="flex items-center w-full">
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
        <div className="scroll-down w-full flex items-center justify-center">
          <button
            className="cursor-pointer opacity-50 hover:opacity-100 transition duration-500"
            onClick={() => smoothScroll('explanation')}
          >
            <p className="text-xl">scroll for details</p>
          </button>
        </div>
        <div className="w-full flex justify-end">
          <Button
            onClick={generateNewColor}
            className="z-10"
            style={{
              backgroundColor: generateTextColor(baseColor),
            }}
            shadow
            outlined
          >
            <span
              className="gradient-text text-xl font-bold"
              style={{
                background: cssGradientColors,
              }}
            >
              Press &apos;Space&apos; to generate new color
            </span>
          </Button>
        </div>
      </section>
    </section>
  );
};
