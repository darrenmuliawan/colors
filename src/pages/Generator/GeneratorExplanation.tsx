import { Palette } from 'components';
import { useGeneratorColor } from 'hooks';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const GeneratorExplanation = () => {
  const [step, setStep] = useState(0);
  const {
    accentColor,
    baseColor,
    secondaryButtonColor,
    successColor,
    errorColor,
    warningColor,
    infoColor,
    neutralColors,
  } = useGeneratorColor();

  useEffect(() => {
    setStep(0);
  }, []);

  const renderExplanation = () => {
    if (step === 0) {
      return renderFirstStep();
    }
  };

  const renderFirstStep = () => {
    return (
      <div>
        <h1 className="text-5xl text-center mb-10">
          For most projects, you only need 5 colors (-ish)!
        </h1>
        <div className="mb-4 flex h-[100vh]">
          <div className="">
            {/* <ColorPicker baseColor={baseColor} color={baseColor} /> */}
            <Palette color={baseColor} size={256} mode="hsl" />
          </div>
          <div className="pl-10">
            <h2 className="text-4xl">Step 1: Generate the base (or primary) color</h2>
            <p className="text-2xl">
              First step is to choose your main brand color and expand from there. This color will
              say a lot about your brand. In general, you want to pick a color that is high
              saturated, since you do not want those de-saturated *dead* colors for your main brand,
              don&apos;t you?
            </p>
            <br />
            <p className="text-2xl">
              {' '}
              These colors usually lies on the top right corner of the color picker. However, we
              have handpicked more than 100 beautiful base colors for you! Explore available{' '}
              <Link to="/colors">
                <span
                  className="text-blue-600 underline cursor-pointer opacity-70 hover:opacity-100"
                  style={{ textDecorationColor: accentColor, textDecorationStyle: 'wavy' }}
                >
                  colors
                </span>
              </Link>{' '}
              here! (will update more in the future)
            </p>
            <br />
            <p className="text-2xl">
              This color will be used for your primary buttons or CTA buttons, icons, links, or
              text.
            </p>
          </div>
        </div>
        <div className="mb-4 flex h-[100vh]">
          <div className="flex flex-col">
            <div className="w-[250px]">
              <Palette
                color={baseColor}
                mode="hsl"
                width={'full'}
                height={360}
                size="auto"
                className="mb-1"
              />
              <Palette
                color={secondaryButtonColor}
                mode="hsl"
                width={'full'}
                height={180}
                size="auto"
                className="mb-1"
              />
              <Palette
                color={accentColor}
                mode="hsl"
                width={'full'}
                height={60}
                size="auto"
                className="mb-1"
              />
            </div>
          </div>
          <div className="pl-10">
            <h2 className="text-4xl">Step 2: Create secondary and accent color</h2>
            <p className="text-2xl">
              In addition to our base color, we want to have secondary and accent colors.
            </p>
            <br />
            <p className="text-2xl">
              Secondary color is the color that often used alongside the primary color, like those
              buttons that are usually beside the main CTA button. Using complementary colors
              relationship (opposite color on the color wheel, such as orange and blue) is a good
              idea since it will create a dynamic contrast between the primary and secondary color.
            </p>
            <br />
            <p className="text-2xl">
              Accent color is the decoration color. Its job is to provide emphasis, contrast, or
              visual interest within a design composition. It is not supposed to be used a lot, but
              should be used here and there to make your design stands out. Accent color is usually
              a vibrant or bold compared to the primary color. To generate this color, we use{' '}
              <span
                className="text-blue-600 underline cursor-pointer opacity-70 hover:opacity-100"
                style={{ textDecorationColor: accentColor, textDecorationStyle: 'wavy' }}
              >
                split complementary relationship
              </span>{' '}
              from our primary color to generate a vibrant and bold color.
            </p>
            <br />
            <p className="text-2xl">
              The general rule of thumb to use these colors is 60:30:10 (primary:secondary:accent).
            </p>
          </div>
        </div>
        <div className="mb-4 flex h-[100vh]">
          <div className="lg:min-w-[420px]">
            <div className="w-full grid grid-cols-2 gap-2">
              <Palette color={baseColor} mode="hsl" size={'auto'} height={210} width={'full'} />
              <Palette color={successColor} mode="hsl" size={'auto'} height={210} width={'full'} />
              <Palette color={errorColor} mode="hsl" size={'auto'} height={210} width={'full'} />
              <Palette color={warningColor} mode="hsl" size={'auto'} height={210} width={'full'} />
              <Palette color={infoColor} mode="hsl" size={'auto'} height={210} width={'full'} />
            </div>
          </div>
          <div className="pl-10">
            <h2 className="text-4xl">Step 3: Create supporting colors</h2>
            <p className="text-2xl">
              These are the colors that will be used when we need to use colors to send messages to
              the users. I am sure you have been seeing these online. These colors are usually
              shades of green (success messages), orange (warning), red (dangerous situation), and
              blue (informational messages).
            </p>
            <br />
            <p className="text-2xl">
              How can we generate such colors? The rule of thumb is that we want a similar level of
              saturation for our main brand color and these supporting colors. We do not want a
              saturated main color and have desaturated supporting colors. To achieve this, we look
              into the HSL values of our main color and adjust similar level of saturation (S) and
              lightness (L), typically within 5-10 range.
            </p>
            <br />
            <p className="text-2xl">
              However, this should not be the case if your main color lies toward
              neutral/desaturated color.
            </p>
          </div>
        </div>
        <div className="mb-4 flex h-[100vh]">
          <div className="lg:min-w-[420px]">
            <div className="w-full gap-2 grid grid-cols-3">
              {neutralColors.map((color, index) => (
                <Palette
                  key={`neutral-${index}`}
                  color={color}
                  size={'auto'}
                  width="full"
                  height={140}
                />
              ))}
            </div>
          </div>
          <div className="pl-10">
            <h2 className="text-4xl">Step 4: Create neutral colors</h2>
            <p className="text-2xl">
              Neutral colors are the last missing piece of our color palettes. Neutral colors are
              used for background, text color, disabled text color, and borders. To achieve this
              generate a mid gray, then apply the shades technique to generate colors from light
              gray to dark gray (or black).
            </p>
          </div>
        </div>
        <div className="mb-4 flex h-[100vh]">
          <div className="lg:min-w-[420px]">
            <div className="w-full gap-2 grid grid-cols-3"></div>
          </div>
          <div className="pl-10">
            <h2 className="text-4xl">Step 5: Trust your eyes &#128064;</h2>
            <p className="text-2xl">
              Well that&apos;s it, really! You just created your color palettes. For most of website
              designs, you only need those 5 colors (or 5 sets of colors?).
            </p>
            <br />
            <p className="text-2xl">
              This is just a tool to help you quickstart choosing your color palettes. This tool
              works because of a set of algorithms applied to colors. It is probably (almost)
              impossible to get beautiful set of colors just by doing algorithms. As humans, it is
              our job to fine-tune this color to our liking. At the end of the day, you are the
              final judge so always trust your own eyes!
            </p>
            <br />
            <p className="text-2xl">
              Keep scrolling to copy the CSS or the Tailwind CSS if you are cultured like me.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return <section>{renderExplanation()}</section>;
};
