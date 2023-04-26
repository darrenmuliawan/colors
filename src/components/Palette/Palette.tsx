import { generateTextColor } from 'utils';

interface PaletteProps {
  color: string;
  label?: string;
}

export const Palette = (props: PaletteProps) => {
  const { color, label } = props;

  return (
    <div
      className="bg-black h-[192px] w-[192px] rounded-lg flex flex-col justify-end items-center"
      style={{
        backgroundColor: color,
      }}
    >
      <p
        className="mb-0 text-lg font-bold"
        style={{
          color: generateTextColor(color),
        }}
      >
        {color}
      </p>
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
