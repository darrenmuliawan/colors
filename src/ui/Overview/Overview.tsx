import { Button, Palette, RGBText } from 'components';
import { BASE_COLOR, COLOR_BRAND_EXPLANATION } from 'constants';
import { useGeneratorColor } from 'hooks';
import { generateTextColor, isShadeOf, smoothScroll, smoothScrollToDownloadCSS } from 'utils';
import Random from 'assets/svg/random.svg';
import { Tooltip } from 'react-tooltip';

interface OverviewProps {
  baseColor: string;
  generateNewColor: () => void;
  cssGradientColors: string;
}

export const Overview = (props: OverviewProps) => {
  const { baseColor, generateNewColor } = props;
  const {
    textColor,
    secondaryTextColor,
    primaryButtonColor,
    secondaryButtonColor,
    backgroundColor,
    accentColor,
    overviewBgColor,
  } = useGeneratorColor();
  // const overviewBgColor = adjustColorBrightness(
  //   secondaryButtonColor,
  //   getColorBrightness(primaryButtonColor) > 0.5 ? -2 : 1
  // );

  // console.log('getColorBrightness(primaryButtonColor): ', getColorBrightness(primaryButtonColor));
  return (
    <section
      className="relative flex items-center min-h-[100vh] xl:pt-0 pt-[150px]"
      id="overview"
      style={{
        background: overviewBgColor,
      }}
    >
      {/* <img src={Yayoi} alt="yayoi kusama" className="mix-blend-luminosity -z-[100]" /> */}
      {/* <div
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
      ></div> */}
      <div className="xl:pl-10 px-10 xl:pb-0 pb-[100px]  justify-center items-center flex flex-col">
        <div className="max-w-[66%]">
          <div className="mb-4 flex z-10">
            {/* <Palette
          color={secondaryTextColor}
          size={40}
          withLabel={false}
          className="border-2 border-solid mr-2"
          style={{
            borderColor: generateTextColor(baseColor),
          }}
        /> */}
            <h1
              className="text-8xl mb-4 z-10"
              style={{
                color: primaryButtonColor,
                // background: cssGradientColors,
                textDecoration: 'underline',
                textDecorationColor: accentColor,
                textDecorationStyle: 'wavy',
                textUnderlineOffset: 10,
              }}
            >
              {BASE_COLOR[baseColor].name}
            </h1>
          </div>
          <RGBText
            text={baseColor}
            color={generateTextColor(overviewBgColor)}
            className="text-5xl mb-8 z-10 font-normal"
          />
          <h2
            className="text-2xl z-10 w-full text-left mb-10"
            style={{
              color: generateTextColor(overviewBgColor),
            }}
          >
            {COLOR_BRAND_EXPLANATION[isShadeOf(baseColor)]}
          </h2>
          <div className="flex">
            <Button
              onClick={smoothScrollToDownloadCSS}
              className="z-10"
              style={{
                backgroundColor: primaryButtonColor,
              }}
              shadow
              outlined
            >
              <span
                className="text-2xl font-bold"
                style={{
                  color: generateTextColor(primaryButtonColor),
                }}
                // className="gradient-text text-xl font-bold"
                // style={{
                //   background: cssGradientColors,
                // }}
              >
                Download CSS
              </span>
            </Button>
            <Button
              className="z-10 ml-4"
              style={{
                backgroundColor: secondaryButtonColor,
              }}
              shadow
              outlined
              onClick={() => smoothScroll('explanation')}
            >
              <span
                className="text-2xl font-bold"
                style={{
                  color: generateTextColor(secondaryButtonColor),
                }}
                // className="gradient-text text-xl font-bold"
                // style={{
                //   background: cssGradientColors,
                // }}
              >
                How does it work?
              </span>
            </Button>
            <Button
              className="z-10 ml-4"
              style={{
                backgroundColor: accentColor,
              }}
              shadow
              outlined
              onClick={generateNewColor}
              tooltipTitle="Press space to generate new color!"
              tooltipId="random-tooltip"
            >
              <img src={Random} alt="press space to generate new color" height={28} />
            </Button>
            <Tooltip id={'random-tooltip'} />
          </div>
        </div>
      </div>
      {/* <div className="w-full h-full flex items-center justify-center pr-10">
        <div
          style={{
            backgroundColor: primaryButtonColor,
          }}
        >
          <img src={Yayoi} alt="yayoi kusama" className="mix-blend-luminosity" />
        </div>
        <Artpiece />
      </div> */}
      <section className="absolute bottom-10 w-full flex justify-between px-10">
        <div className="flex items-center w-full">
          <div className="mr-2">
            <Palette
              color={backgroundColor}
              size={32}
              withLabel={false}
              className="border-2 border-solid"
              style={{
                borderColor: generateTextColor(baseColor),
              }}
            />
          </div>
          <div className="mr-2">
            <Palette
              color={textColor}
              size={32}
              withLabel={false}
              className="border-2 border-solid"
              style={{
                borderColor: generateTextColor(baseColor),
              }}
            />
          </div>
          <div className="mr-2">
            <Palette
              color={secondaryTextColor}
              size={32}
              withLabel={false}
              className="border-2 border-solid"
              style={{
                borderColor: generateTextColor(baseColor),
              }}
            />
          </div>
          <div className="mr-2">
            <Palette
              color={primaryButtonColor}
              size={32}
              withLabel={false}
              className="border-2 border-solid"
              style={{
                borderColor: generateTextColor(baseColor),
              }}
            />
          </div>
          <div className="mr-2">
            <Palette
              color={secondaryButtonColor}
              size={32}
              withLabel={false}
              className="border-2 border-solid"
              style={{
                borderColor: generateTextColor(baseColor),
              }}
            />
          </div>
          <div className="mr-2">
            <Palette
              color={accentColor}
              size={32}
              withLabel={false}
              className="border-2 border-solid"
              style={{
                borderColor: generateTextColor(baseColor),
              }}
            />
          </div>
          {/* {gradientColors.map((gradient, index) => (
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
          ))} */}
        </div>
        <div className="scroll-down w-full flex items-center justify-center">
          <button
            className="cursor-pointer opacity-50 hover:opacity-100 transition duration-500"
            onClick={() => smoothScroll('explanation')}
          >
            <p className="text-xl" style={{ color: generateTextColor(overviewBgColor) }}>
              scroll for details
            </p>
          </button>
        </div>
        <div className="w-full flex justify-end"></div>
      </section>
    </section>
  );
};
