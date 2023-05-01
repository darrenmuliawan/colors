/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Dropdown, Palette } from 'components';
import { useGeneratorColor } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { generateTextColor } from 'utils';

interface ToolOptionProps {
  option: string;
  onClick: (option: string) => void;
}
const ToolsOption = (props: ToolOptionProps) => {
  const { option, onClick } = props;
  const { baseColor } = useGeneratorColor();

  const getTitle = () => {
    if (option === 'generator') {
      return 'Palette Generator';
    } else if (option === 'wallpaper') {
      return 'Wallpaper';
    }
  };

  const getDescription = () => {
    if (option === 'generator') {
      return 'Generate beautiful color palettes in seconds';
    } else if (option === 'wallpaper') {
      return 'Explore colors and create customized wallpapers';
    }
  };

  const getIcon = () => {
    if (option === 'generator') {
      return '';
    } else if (option === 'wallpaper') {
      return <Palette color={baseColor} size={40} withLabel={false} />;
    }
  };

  return (
    <Link to={'/colors'}>
      <Button
        className="w-full flex items-center  mb-2 bg-transparent shadow-none hover:shadow-none hover:bg-neutral p-2 text-left last:mb-0"
        onClick={() => onClick(option)}
      >
        <div className="mr-3">{getIcon()}</div>
        <div className="w-full">
          <p className="text-xl text-neutral-dark font-bold">{getTitle()}</p>
          <h6 className="text-sm text-neutral-light">{getDescription()}</h6>
        </div>
      </Button>
    </Link>
  );
};

interface ToolsDropdownProps {
  stayOpenRef: React.RefObject<HTMLDivElement>;
}

export const ToolsDropdown = (props: ToolsDropdownProps) => {
  const { stayOpenRef } = props;
  const { baseColor } = useGeneratorColor();

  const options = ['generator', 'wallpaper'];
  const [open, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // text color
  const [textColor, setTextColor] = useState('#ffffff');
  const pathname = window.location.pathname;

  useEffect(() => {
    if (pathname === '/' || pathname === '/generate') {
      setTextColor(generateTextColor(baseColor));
    } else {
      setTextColor('#000000');
    }
  }, [pathname]);

  const onSelectOption = (option: string) => {
    console.log('option: ', option);
    setIsOpen(false);

    // if (option === 'generator') {

    // } else if (option === 'wallpaper') {

    // } else if (option === 'colors') {

    // }
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('stayOpen: ', stayOpenRef.current, 'event: ', event.relatedTarget);
    if (
      !dropdownRef.current?.contains(event.relatedTarget as Node) &&
      !(stayOpenRef?.current?.contains(event.relatedTarget as Node) ?? false)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Dropdown
        open={open}
        setIsOpen={setIsOpen}
        title="Tools"
        dropdownClassName="w-[400px] p-2"
        style={{
          color: textColor,
        }}
      >
        {options.map((option, index) => (
          <ToolsOption key={`tools-${index}`} option={option} onClick={onSelectOption} />
        ))}
      </Dropdown>
    </div>
  );
};
