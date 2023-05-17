import chroma from 'chroma-js';
import { useInfoPopup } from 'hooks';
import { classNames, formatHSL } from 'utils';

interface RGBTextProps {
  text: string;
  color: string;
  className?: string;
  mode?: 'hex' | 'hsl';
}

export const RGBText = (props: RGBTextProps) => {
  const { text, color, className = '', mode = 'hex' } = props;
  const { showPopup } = useInfoPopup();

  const copyToClipboard = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    if (e.buttons) e.preventDefault();
    navigator.clipboard.writeText(getText());
    showPopup('Copied to clipboard!');
  };

  const getText = () => {
    if (mode === 'hex') {
      return text;
    } else if (mode === 'hsl') {
      const hsl = chroma(text).hsl();
      return formatHSL(hsl);
    }
    return '';
  };

  return (
    <>
      <p
        className={classNames(
          'mb-0 text-lg font-bold uppercase hover:underline cursor-pointer',
          className
        )}
        style={{
          color: color,
        }}
        onClick={copyToClipboard}
        role="button"
        tabIndex={0}
      >
        {getText()}
      </p>
    </>
  );
};
