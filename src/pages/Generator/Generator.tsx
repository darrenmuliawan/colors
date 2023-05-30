import { useEffect } from 'react';
import { Overview } from 'ui';
import { useGeneratorColor } from 'hooks';
import { GeneratorExplanation } from './GeneratorExplanation';

export const GeneratorPage = () => {
  const { baseColor, cssGradientColors, generateNewColor } = useGeneratorColor();

  useEffect(() => {
    // add listener for spacebar
    const handleSpacebar = (e: KeyboardEvent) => {
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
    window.addEventListener('keydown', handleSpacebar);

    generateNewColor();

    return () => {
      window.removeEventListener('keydown', handleSpacebar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Overview
        baseColor={baseColor}
        generateNewColor={generateNewColor}
        // gradientColors={gradientColors}
        cssGradientColors={cssGradientColors}
      />
      <div id="explanation">
        <GeneratorExplanation />
      </div>
    </div>
  );
};
