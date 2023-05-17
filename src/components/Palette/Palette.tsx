/* eslint-disable jsx-a11y/no-static-element-interactions */
import { RGBText } from 'components/Text';
import { classNames, generateTextColor } from 'utils';

interface PaletteProps {
  color: string;
  label?: string;
  size?: number | 'auto';
  height?: number;
  width?: number | 'full';
  withLabel?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  mode?: 'hex' | 'hsl';
}

export const Palette = (props: PaletteProps) => {
  const {
    color,
    label,
    size = 192,
    height,
    width,
    withLabel = true,
    className = '',
    style,
    onClick,
    mode,
  } = props;

  return (
    <div
      className={classNames(
        'bg-black rounded-lg flex flex-col justify-end items-center transition duration-500 ease-in shadow-lg',
        onClick ? 'cursor-pointer hover:scale-110 duration-[200] transition-all' : '',
        className
      )}
      style={{
        backgroundColor: color,
        height: size !== 'auto' ? size : height,
        width: size !== 'auto' ? size : width === 'full' ? '100%' : width,
        ...style,
      }}
      onClick={onClick}
    >
      {withLabel && <RGBText text={color} color={generateTextColor(color)} mode={mode} />}
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
