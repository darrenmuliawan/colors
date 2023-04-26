import { classNames } from 'utils';

interface RGBTextProps {
  text: string;
  color: string;
  className?: string;
}

export const RGBText = (props: RGBTextProps) => {
  const { text, color, className = '' } = props;

  const copyToClipboard = (e: React.MouseEvent<HTMLParagraphElement>) => {
    if (e.buttons) e.preventDefault();
    navigator.clipboard.writeText(text);
  };

  return (
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
      {text}
    </p>
  );
};
