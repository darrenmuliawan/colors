/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AnimatedDiv, Palette } from 'components';
import { useGeneratorColor, useWindowSize } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSGenerator } from './CSSGenerator';
import { Footer } from 'ui';

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
  const ref = useRef<HTMLDivElement>(null);
  const [cardSize, setCardSize] = useState(Math.max(300, 0.4 * window.innerWidth));
  const { width, height } = useWindowSize();
  useEffect(() => {
    setCardSize(Math.max(300, 0.4 * width));
  }, [width, height]);

  const [transform, setTransform] = useState(
    'translate3d(0px,0px,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) skew(0deg, 0deg)'
  );
  const [transformStep1, setTransformStep1] = useState(
    'translate3d(0px,0px,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) skew(0deg, 0deg)'
  );
  const [transformStep2, setTransformStep2] = useState(
    'translate3d(0px,0px,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) skew(0deg, 0deg)'
  );
  const [transformStep3, setTransformStep3] = useState(
    'translate3d(0px,0px,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) skew(0deg, 0deg)'
  );

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const div = e.currentTarget;

    // if scrolled down, then scale down
    const scrollTop = div.scrollTop;
    const fromTop = Math.floor((scrollTop / div.scrollHeight) * 1000);
    // console.log('scrollY: ', div.scrollTop, div.scrollHeight, 'fromTop: ', fromTop);
    let translateX = '0';
    let translateY = '0';
    let translateZ = '0';
    let translate3d = `${translateX},${translateY},${translateZ}`;
    let scale = Math.max(0.6, 1 - fromTop * 0.01);
    let scale3d = `${scale},${scale},${scale}`;
    let rotateX = `0deg`;
    let rotateY = `0deg`;
    let skew = `0deg, 0deg`;
    let transform = `translate3d(${translate3d}) scale3d(${scale3d}) rotateX(${rotateX}) rotateY(${rotateY}) skew(${skew})`;
    // console.log('transform: ', transform);
    setTransform(transform);

    // step 1
    const firstStepDiv = document.getElementById('first-step');
    let sticked;
    let end;
    let position;
    let totalOffset;
    let numCard;
    let height;
    // const cardSize = Math.max(300, 0.4 * window.innerWidth);
    const gapSize = window.innerWidth < 1280 ? 16 : 40;
    if (firstStepDiv) {
      end = 2 * window.innerHeight;
      position = window.innerHeight;
      sticked = isSticky(firstStepDiv, div, position, end);
      numCard = 3;
      totalOffset = numCard * cardSize + numCard * gapSize - 0.33 * window.innerWidth;
      height = end - position;
      // console.log('total offset: ', totalOffset);

      // console.log(
      //   `1st sticked: ${sticked}, scroll: ${scrollTop}, position: ${position}, height: ${end}`
      // );

      if (sticked) {
        // fromTop = Math.floor((div.scrollTop / div.scrollHeight) * 1000);
        // translateX = `-${Math.min(40, Math.floor(((scrollTop - position) / end) * 100))}%`;
        translateX = `-${((scrollTop - position) / height) * totalOffset}px`;
        // translateX = `-600px`;
        translateY = '0';
        translateZ = '0';
        translate3d = `${translateX},${translateY},${translateZ}`;
        scale = 1;
        scale3d = `${scale},${scale},${scale}`;
        rotateX = `0deg`;
        rotateY = `0deg`;
        skew = `0deg, 0deg`;
        transform = `translate3d(${translate3d}) scale3d(${scale3d}) rotateX(${rotateX}) rotateY(${rotateY}) skew(${skew})`;
        setTransformStep1(transform);
      } else if (scrollTop < position) {
        translateX = `0%`;
        translateY = '0';
        translateZ = '0';
        translate3d = `${translateX},${translateY},${translateZ}`;
        scale = 1;
        scale3d = `${scale},${scale},${scale}`;
        rotateX = `0deg`;
        rotateY = `0deg`;
        skew = `0deg, 0deg`;
        transform = `translate3d(${translate3d}) scale3d(${scale3d}) rotateX(${rotateX}) rotateY(${rotateY}) skew(${skew})`;
        setTransformStep1(transform);
      }
    }

    // step 2
    const secondStepDiv = document.getElementById('second-step');
    if (secondStepDiv) {
      end = 5 * window.innerHeight;
      position = 3 * window.innerHeight;
      sticked = isSticky(secondStepDiv, div, position, end);
      numCard = 4;
      totalOffset = numCard * cardSize + numCard * gapSize - 0.33 * window.innerWidth;
      height = end - position;
      // console.log(
      //   `2nd sticked: ${sticked}, scroll: ${scrollTop}, position: ${position}, height: ${end}`
      // );

      if (sticked) {
        // fromTop = Math.floor((div.scrollTop / div.scrollHeight) * 1000);
        translateX = `-${((scrollTop - position) / height) * totalOffset}px`;
        // translateX = `-${Math.min(
        //   60,
        //   Math.floor(((scrollTop - position) / (end - position)) * 100)
        // )}%`;
        translateY = '0';
        translateZ = '0';
        translate3d = `${translateX},${translateY},${translateZ}`;
        scale = 1;
        scale3d = `${scale},${scale},${scale}`;
        rotateX = `0deg`;
        rotateY = `0deg`;
        skew = `0deg, 0deg`;
        transform = `translate3d(${translate3d}) scale3d(${scale3d}) rotateX(${rotateX}) rotateY(${rotateY}) skew(${skew})`;
        setTransformStep2(transform);
      } else if (scrollTop < position) {
        translateX = `0%`;
        translateY = '0';
        translateZ = '0';
        translate3d = `${translateX},${translateY},${translateZ}`;
        scale = 1;
        scale3d = `${scale},${scale},${scale}`;
        rotateX = `0deg`;
        rotateY = `0deg`;
        skew = `0deg, 0deg`;
        transform = `translate3d(${translate3d}) scale3d(${scale3d}) rotateX(${rotateX}) rotateY(${rotateY}) skew(${skew})`;
        setTransformStep2(transform);
      }
    }

    // step 3
    const thirdStepDiv = document.getElementById('third-step');
    if (thirdStepDiv) {
      end = 11 * window.innerHeight;
      position = 6 * window.innerHeight;
      sticked = isSticky(thirdStepDiv, div, position, end);
      numCard = 7;
      totalOffset = numCard * cardSize + numCard * gapSize - 0.33 * window.innerWidth;
      height = end - position;

      if (sticked) {
        // fromTop = Math.floor((div.scrollTop / div.scrollHeight) * 1000);
        // translateX = `-${Math.min(
        //   150,
        //   Math.floor(((scrollTop - position) / (end - position)) * 150)
        // )}%`;
        translateX = `-${((scrollTop - position) / height) * totalOffset}px`;
        // console.log(
        //   `3rd sticked: ${sticked}, scroll: ${scrollTop}, position: ${position}, height: ${end}, translateX: ${translateX}`
        // );
        translateY = '0';
        translateZ = '0';
        translate3d = `${translateX},${translateY},${translateZ}`;
        scale = 1;
        scale3d = `${scale},${scale},${scale}`;
        rotateX = `0deg`;
        rotateY = `0deg`;
        skew = `0deg, 0deg`;
        transform = `translate3d(${translate3d}) scale3d(${scale3d}) rotateX(${rotateX}) rotateY(${rotateY}) skew(${skew})`;
        // console.log('transform: ', transform);
        setTransformStep3(transform);
      } else if (scrollTop < position) {
        translateX = `0%`;
        translateY = '0';
        translateZ = '0';
        translate3d = `${translateX},${translateY},${translateZ}`;
        scale = 1;
        scale3d = `${scale},${scale},${scale}`;
        rotateX = `0deg`;
        rotateY = `0deg`;
        skew = `0deg, 0deg`;
        transform = `translate3d(${translate3d}) scale3d(${scale3d}) rotateX(${rotateX}) rotateY(${rotateY}) skew(${skew})`;
        setTransformStep3(transform);
      }
    }
  };

  const isSticky = (element: HTMLElement, outer: HTMLElement, position: number, end: number) => {
    const rect = element.getBoundingClientRect();
    const scrollTop = outer.scrollTop;
    // console.log(
    //   'rect.top: ',
    //   rect.top,
    //   'scrollTop: ',
    //   scrollTop,
    //   'position: ',
    //   position,
    //   'end ',
    //   end
    // );

    return rect.top <= 0 && scrollTop >= position && scrollTop <= end;
  };

  useEffect(() => {
    if (ref.current) {
      // @ts-ignore
      ref.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref.current) {
        // @ts-ignore
        ref.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref.current]);

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
      <div style={{ scrollSnapType: 'y mandatory' }}>
        {/* <ScrollTransitionViews />÷ */}
        <div className="h-screen bg-blue-200 grid place-items-center">
          <div className="sticky top-0">
            <AnimatedDiv transform={transform}>
              <div className="">
                <h1 className="text-center text-7xl xl:text-9xl">
                  For most projects, you only need 5 colors (-ish)!
                </h1>
              </div>
            </AnimatedDiv>
          </div>
        </div>
        <div id="first-step" className="h-[200vh]" style={{ scrollSnapAlign: 'center' }}>
          <div className="sticky top-0 overflow-hidden">
            <AnimatedDiv transform={''} className="pt-4">
              <div className="xl:px-10 px-4 xl:pt-10">
                <h1 className="mb-4 xl:mb-10 text-4xl xl:text-6xl 2xl:text-8xl">
                  Step 1: Generate the base (or primary) color
                </h1>
              </div>
            </AnimatedDiv>
            <AnimatedDiv
              transform={transformStep1}
              className="flex xl:gap-10 gap-4 px-4 xl:px-10"
              id="first-step-list"
            >
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={baseColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  First step is to choose your main brand color and expand from there. This color
                  will say a lot about your brand. In general, you want to pick a color that is high
                  saturated, since you do not want those de-saturated *dead* colors for your main
                  brand, don&apos;t you?
                </p>
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                {/* <div className="">
                  <ColorPicker baseColor={baseColor} color={baseColor} />
                </div> */}
                <Palette
                  color={baseColor}
                  size="auto"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                  mode="hsl"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
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
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={baseColor}
                  size="auto"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                  mode="hsl"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  This color will be used for your primary buttons or CTA buttons, icons, links, or
                  text.
                </p>
              </div>
            </AnimatedDiv>
          </div>
        </div>
        <div id="second-step" className="h-[300vh]" style={{ scrollSnapAlign: 'center' }}>
          <div className="sticky top-0 overflow-hidden">
            <AnimatedDiv transform={''} className="pt-4">
              <div className="xl:px-10 px-4 xl:pt-10">
                <h1 className="mb-4 xl:mb-10 text-4xl xl:text-6xl 2xl:text-8xl">
                  Step 2: Create secondary and accent color
                </h1>
              </div>
            </AnimatedDiv>
            <AnimatedDiv
              transform={transformStep2}
              className="flex xl:gap-10 gap-4 px-4 xl:px-10"
              id="second-step-list"
            >
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={baseColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  In addition to our base color, we want to have secondary and accent colors.
                </p>
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={secondaryButtonColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  Secondary color is the color that often used alongside the primary color, like
                  those buttons that are usually beside the main CTA button. Using complementary
                  colors relationship (opposite color on the color wheel, such as orange and blue)
                  is a good idea since it will create a dynamic contrast between the primary and
                  secondary color.
                </p>
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={accentColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  Accent color is the decoration color. Its job is to provide emphasis, contrast, or
                  visual interest within a design composition. It is not supposed to be used a lot,
                  but should be used here and there to make your design stands out. Accent color is
                  usually a vibrant or bold compared to the primary color. To generate this color,
                  we use{' '}
                  <span
                    className="text-blue-600 underline cursor-pointer opacity-70 hover:opacity-100"
                    style={{ textDecorationColor: accentColor, textDecorationStyle: 'wavy' }}
                  >
                    split complementary relationship
                  </span>{' '}
                  from our primary color to generate a vibrant and bold color.
                </p>
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={baseColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />

                <p className="text-xl 2xl:text-2xl mt-4">
                  The general rule of thumb to use these colors is 60:30:10
                  (primary:secondary:accent).
                </p>
              </div>
            </AnimatedDiv>
          </div>
        </div>
        <div id="third-step" className="h-[600vh]" style={{ scrollSnapAlign: 'center' }}>
          <div className="sticky top-0 overflow-hidden">
            <AnimatedDiv transform={''} className="pt-4">
              <div className="xl:px-10 px-4 xl:pt-10">
                <h1 className="mb-4 xl:mb-10 text-4xl xl:text-6xl 2xl:text-8xl">
                  Step 3: Create supporting colors
                </h1>
              </div>
            </AnimatedDiv>
            <AnimatedDiv
              transform={transformStep3}
              className="flex xl:gap-10 gap-4 px-4 xl:px-10"
              id="third-step-list"
            >
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={baseColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  These are the colors that will be used when we need to use colors to send messages
                  to the users. I am sure you have been seeing these online. These colors are
                  usually shades of green (success messages), orange (warning), red (dangerous
                  situation), and blue (informational messages).{' '}
                </p>
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={successColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  Green color is used to notify the user of success message or action.
                </p>
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={warningColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  Orange color is used to notify the user of warning message or warn user against
                  certain action.
                </p>
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={errorColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  Red color is used to notify the user of error message or (probably) dangerous
                  action such as delete data, unfriend, etc.
                </p>
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={infoColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  Blue color is used to let the user know about certain information.
                </p>
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={secondaryButtonColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  How can we generate such colors? The rule of thumb is that we want a similar level
                  of saturation for our main brand color and these supporting colors. We do not want
                  a saturated main color and have desaturated supporting colors. To achieve this, we
                  look into the HSL values of our main color and adjust similar level of saturation
                  (S) and lightness (L), typically within 5-10 range.
                </p>
              </div>
              <div
                className="border border-solid p-4 rounded-xl aspect-[1.618]"
                style={{
                  minWidth: cardSize,
                }}
              >
                <Palette
                  color={accentColor}
                  size="auto"
                  mode="hsl"
                  className="2xl:h-[256px] lg:h-[192px] h-[128px]"
                />
                <p className="text-xl 2xl:text-2xl mt-4">
                  However, this should not be the case if your main color lies toward
                  neutral/desaturated color.
                </p>
              </div>
            </AnimatedDiv>
          </div>
        </div>
        <div id="fourth-step" className="h-[150vh]" style={{ scrollSnapAlign: 'center' }}>
          <div className="sticky top-0">
            <div className="absolute top-0 left-0 h-full w-full bg-black z-0"></div>
            <div className="flex border border-solid rounded-[150px] overflow-hidden bg-purple-200 z-[1] relative">
              <div className="p-4 border-solid border-r border-t-0 border-l-0 border-b-0 w-[300px] hidden xl:flex flex-col justify-between h-screen max-h-screen sticky top-0">
                {neutralColors.map((color, index) => (
                  <div key={`neutral-l-${index}`} className="w-full h-[60px] mb-4 last:mb-0">
                    <Palette
                      color={color}
                      size="auto"
                      mode="hsl"
                      className="xl:h-[80px] h-[60px]"
                      withLabel={false}
                    />
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-col items-center h-[100vh] overflow-auto">
                <h1 className="my-10 text-5xl xl:text-9xl text-center">
                  Step 4: Create neutral colors
                </h1>
                <div className="xl:max-w-[70%] xl:px-0 px-10 grid place-items-center">
                  <p className="text-2xl">
                    Neutral colors are the last missing piece of our color palettes. Neutral colors
                    are used for background, text color, disabled text color, and borders. To
                    achieve this generate a mid gray, then apply the shades technique to generate
                    colors from light gray to dark gray (or black).
                  </p>
                </div>
              </div>
              <div className="p-4 border-solid border-l border-t-0 border-r-0 border-b-0 w-[300px] hidden xl:flex flex-col justify-between h-screen max-h-screen sticky top-0">
                {neutralColors.map((color, index) => (
                  <div key={`neutral-r-${index}`} className="w-full h-[80px] mb-4 last:mb-0">
                    <Palette color={color} height={80} size="auto" withLabel={false} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen bg-blue-200 grid place-items-center">
          <div className="sticky top-0">
            <AnimatedDiv transform={transform}>
              <div className="">
                <h1 className="text-center text-8xl xl:text-9xl">
                  🎉 Well that&apos;s it, really!
                </h1>
              </div>
            </AnimatedDiv>
          </div>
        </div>
        <div className="h-screen bg-blue-200 grid place-items-center">
          <div className="sticky top-0">
            <AnimatedDiv transform={transform}>
              <div className="">
                <h1 className="xl:text-center text-left text-6xl xl:text-9xl">
                  This is just a tool to help you quickstart choosing your color palettes. This tool
                  works because of a set of axlorithms applied to certain colors.
                </h1>
              </div>
            </AnimatedDiv>
          </div>
        </div>
        <div className="h-screen bg-blue-200 grid place-items-center">
          <div className="sticky top-0">
            <AnimatedDiv transform={transform}>
              <div className="">
                <h1 className="xl:text-center text-left text-6xl xl:text-9xl">
                  It is probably impossible (or very hard) to get beautiful set of colors just by
                  doing axlorithms. As humans, it is our job to fine-tune these colors to our
                  liking.
                </h1>
              </div>
            </AnimatedDiv>
          </div>
        </div>
        <div className="h-screen bg-blue-200 grid place-items-center">
          <div className="sticky top-0">
            <AnimatedDiv transform={transform}>
              <div className="">
                <h1 className="xl:text-center text-left text-6xl xl:text-9xl">
                  {' '}
                  At the end of the day, you are the final judge so always trust your own eyes!
                  &#128064;
                </h1>
              </div>
            </AnimatedDiv>
          </div>
        </div>
        <div id="download-css" className="bg-blue-200 grid place-items-center">
          <h1 className="px-4 text-center text-3xl xl:text-6xl">
            You can copy this CSS or Tailwind CSS file
          </h1>
          <CSSGenerator />
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <section ref={ref} id="generator-explanation" className="h-screen overflow-auto">
      {renderExplanation()}
    </section>
  );
};
