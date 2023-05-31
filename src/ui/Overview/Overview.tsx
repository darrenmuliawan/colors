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

  return (
    <section
      className="relative flex items-center min-h-[100vh] xl:pt-0 pt-[40px]"
      id="overview"
      style={{
        background: overviewBgColor,
      }}
    >
      <div className="xl:pl-10 px-10 xl:pb-0 pb-[100px]  justify-center items-center flex flex-col">
        <div className="lg:max-w-[66%]">
          <div className="mb-4 flex ">
            <h1
              className="text-4xl lg:text-8xl lg:mb-4 mb-2 "
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
            className="text-2xl lg:text-5xl lg:mb-8 mb-4  font-normal"
          />
          <h2
            className="text-lg lg:text-2xl  w-full text-left lg:mb-10 mb-4"
            style={{
              color: generateTextColor(overviewBgColor),
            }}
          >
            {COLOR_BRAND_EXPLANATION[isShadeOf(baseColor)]}
          </h2>
          <div className="flex flex-col lg:flex-row">
            <Button
              onClick={smoothScrollToDownloadCSS}
              className=" mb-2 lg:mb-0"
              style={{
                backgroundColor: primaryButtonColor,
              }}
              shadow
              outlined
            >
              <span
                className="text-lg lg:text-2xl font-bold"
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
            <div className="flex flex-row">
              <Button
                className=" lg:ml-4 w-full"
                style={{
                  backgroundColor: secondaryButtonColor,
                }}
                shadow
                outlined
                onClick={() => smoothScroll('explanation')}
              >
                <span
                  className="text-lg lg:text-2xl font-bold"
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
                className=" lg:ml-4 ml-2"
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
      </div>
      <section className="absolute bottom-10 w-full flex justify-between px-10">
        <div className="lg:flex hidden items-center w-full">
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
        <div className="w-full hidden lg:flex justify-end"></div>
      </section>
    </section>
  );
};
