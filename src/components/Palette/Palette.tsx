import { RGBText } from 'components/Text';
import { classNames, generateTextColor } from 'utils';

interface PaletteProps {
  color: string;
  label?: string;
  size?: number;
  withLabel?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Palette = (props: PaletteProps) => {
  const { color, label, size = 192, withLabel = true, className = '', style } = props;

  return (
    <div
      className={classNames(
        'bg-black rounded-lg flex flex-col justify-end items-center transition duration-500 ease-in shadow-lg',
        className
      )}
      style={{
        backgroundColor: color,
        height: size,
        width: size,
        ...style,
      }}
    >
      {withLabel && <RGBText text={color} color={generateTextColor(color)} />}
      <p
        className="mb-4 text-md font-bold"
        style={{
          color: generateTextColor(color),
        }}
      >
        {label}
      </p>
    </div>
  );
};
