/* eslint-disable react-hooks/exhaustive-deps */
import { Button, CodeBlock } from 'components';
import { useGeneratorColor, useInfoPopup } from 'hooks';
import { useEffect, useState } from 'react';
import { classNames } from 'utils';

export const CSSGenerator = () => {
  const {
    baseColor,
    secondaryAccentColor,
    hoverAccentColor,
    hoverSecondaryAccentColor,
    textColor,
    secondaryTextColor,
    tertiaryTextColor,
    hoverTextColor,
    hoverSecondaryTextColor,
    cssGradientColors,
  } = useGeneratorColor();
  const [css, setCSS] = useState('');
  const [tailwindCSS, setTailwindCSS] = useState('');
  const [selectedType, setSelectedType] = useState('css');
  const { showPopup } = useInfoPopup();

  useEffect(() => {
    generateCSS();
    generateTailwindCSS();
  }, [baseColor]);

  const generateCSS = () => {
    setCSS(
      `:root {
  --primary: ${baseColor};
  --primary-hover: ${hoverAccentColor};
  --text-primary: ${textColor};
  --text-primary-hover: ${hoverTextColor};
  --secondary: ${secondaryAccentColor};
  --secondary-hover: ${hoverSecondaryAccentColor};
  --text-secondary: ${secondaryTextColor};
  --text-secondary-hover: ${hoverSecondaryTextColor};
  --tertiary: ${tertiaryTextColor};
  --disabled: ${tertiaryTextColor};
  --error: #FF0000;
  --success: #00FF00;
  --info: #1E90FF;
  --neutral: #F3F4F6;
  --neutral-dark: #000000;
  --neutral-light: #FFFFFF;
}

/* Primary */
.bg-primary {
  background-color: var(--primary);
  color: var(--text-primary);
}

.bg-primary:hover {
  background-color: var(--primary-hover);
  color: var(--text-primary-hover);
}

.text-primary {
  color: var(--text-primary);
}

.text-primary:hover {
  color: var(--text-primary-hover);
}

/* Secondary */
.bg-secondary {
  background-color: var(--secondary);
  color: var(--text-secondary);
}

.bg-secondary:hover {
  background-color: var(--secondary-hover);
  color: var(--text-secondary-hover);
}

.text-secondary {
  color: var(--text-secondary);
}

.text-secondary:hover {
  color: var(--text-secondary-hover);
}

/* Tertiary */
.bg-tertiary {
  background-color: var(--tertiary);
  color: var(--text-tertiary);
}

.bg-tertiary:hover {
  background-color: var(--tertiary-hover);
  color: var(--text-tertiary-hover);
}

.text-tertiary {
  color: var(--text-tertiary);
}

.text-tertiary:hover {
  color: var(--text-tertiary-hover);
}

/* Gradient */
.gradient-text {
  background-clip: text !important;
  -webkit-background-clip: text !important;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  background: ${cssGradientColors};
}

.gradient-bg {
  background: ${cssGradientColors};
}`
    );
  };

  const generateTailwindCSS = () => {
    setTailwindCSS(`module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '${baseColor}',
        'primary-hover': '${hoverAccentColor}',
        secondary: '${secondaryAccentColor}',
        'secondary-hover': '${hoverSecondaryAccentColor}',
        'text-primary': '${textColor}',
        'text-primary-hover': '${hoverTextColor}',
        'text-secondary': '${secondaryTextColor}',
        'text-secondary-hover': '${hoverSecondaryTextColor}',
        'text-tertiary': '${tertiaryTextColor}',
        disabled: '${tertiaryTextColor}',
        error: '#FF0000',
        success: '#00FF00',
        info: '#1E90FF',
        neutral: '#F3F4F6',
        'neutral-dark': '#000000',
        'neutral-light': '#FFFFFF',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};`);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    showPopup('Copied to clipboard!');
  };

  return (
    <section className="mb-10">
      <h2 className="text-5xl text-primary underline-offset-8 underline mb-8">CSS</h2>
      <div className="mb-4">
        <Button
          type="text"
          className={classNames(
            'mr-3 py-1 px-4 text-lg',
            selectedType === 'css'
              ? 'bg-secondary hover:bg-secondary text-text-secondary hover:text-text-secondary-hover'
              : ''
          )}
          onClick={() => setSelectedType('css')}
        >
          style.css
        </Button>
        <Button
          type="text"
          className={classNames(
            'mr-3 py-1 px-4 text-lg',
            selectedType === 'tailwindcss'
              ? 'bg-secondary hover:bg-secondary text-text-secondary hover:text-text-secondary-hover'
              : ''
          )}
          onClick={() => setSelectedType('tailwindcss')}
        >
          tailwind.config.js
        </Button>
      </div>
      <CodeBlock
        title={selectedType === 'css' ? 'styles.css' : 'tailwind.config.js'}
        code={selectedType === 'css' ? css : tailwindCSS}
        className="language-css"
        onCopy={handleCopyCode}
      />
    </section>
  );
};
