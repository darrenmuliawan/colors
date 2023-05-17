interface ColorPickerProps {
  size?: number;
  baseColor: string;
  color: string;
}

export const ColorPicker = (props: ColorPickerProps) => {
  const { size = 400, color } = props;
  return (
    <div
      style={{
        height: size,
        width: size,
        background: color,
      }}
      className="relative rounded-md"
    >
      <div className="absolute top-0 left-0 rounded-full h-[6px] w-[6px] border-2 border-solid border-black"></div>
      <div
        className="absolute w-full h-full rounded-md z-[1]"
        style={{
          background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
        }}
      ></div>
      <div
        className="absolute w-full h-full rounded-md z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%)',
        }}
      ></div>
    </div>
  );
};
