import { Button, Dropdown, Palette } from 'components';
import { BASE_COLOR } from 'constants';
import { ReactComponent as MoreIcon } from 'assets/svg/more.svg';
import { ReactComponent as OpenIcon } from 'assets/svg/open.svg';
import { useRef, useState } from 'react';
import { useColorsState } from 'hooks';

interface ColorPaletteProps {
  color: string;
}

export const ColorPalette = (props: ColorPaletteProps) => {
  const { color } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<SVGSVGElement>(null);
  const { openWallpaper } = useColorsState();

  return (
    <div className="pb-0">
      <Palette
        color={color}
        size={'auto'}
        className="aspect-[1.618] mb-2"
        onClick={() => openWallpaper(color)}
      />
      <div className="flex justify-between items-center px-2">
        <p className="text-lg">{BASE_COLOR[color].name}</p>
        <Dropdown
          open={menuOpen}
          setIsOpen={setMenuOpen}
          buttonComponent={
            <MoreIcon
              height={20}
              className="cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          }
          dropdownClassName="w-[250px] shadow-2xl"
          // buttonDropdownRef={buttonRef}
        >
          <Button
            type="neutral"
            className="w-full flex items-center px-3"
            onClick={() => openWallpaper(color)}
          >
            <Palette color={color} withLabel={false} className="mr-3" size={24} />
            <p className="text-lg">Customize wallpaper</p>
          </Button>
          <Button type="neutral" className="w-full flex items-center px-3">
            <OpenIcon height={24} className="mr-3" ref={buttonRef} />
            <p className="text-lg">Open details</p>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};
