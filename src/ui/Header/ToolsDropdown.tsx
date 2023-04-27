import { Button, Dropdown } from 'components';
import { useRef, useState } from 'react';

interface ToolOptionProps {
  option: string;
  onClick: (option: string) => void;
}
const ToolsOption = (props: ToolOptionProps) => {
  const { option, onClick } = props;

  const getTitle = () => {
    if (option === 'generator') {
      return 'Palette Generator';
    } else if (option === 'wallpaper') {
      return 'Wallpaper';
    } else if (option === 'colors') {
      return 'Colors';
    }
  };

  const getDescription = () => {
    if (option === 'generator') {
      return 'Generate beautiful color palettes in seconds';
    } else if (option === 'wallpaper') {
      return 'Create customized wallpapers for your computer or phone';
    } else if (option === 'colors') {
      return 'Explore beautiful colors';
    }
  };

  return (
    <Button
      className="w-full  mb-2 bg-transparent shadow-none hover:shadow-none hover:bg-neutral p-2 text-left last:mb-0"
      onClick={() => onClick(option)}
    >
      <p className="text-2xl text-black">{getTitle()}</p>
      <h6 className="text-lg text-black">{getDescription()}</h6>
    </Button>
  );
};

interface ToolsDropdownProps {
  stayOpenRef: React.RefObject<HTMLDivElement>;
}

export const ToolsDropdown = (props: ToolsDropdownProps) => {
  const { stayOpenRef } = props;

  const options = ['generator', 'wallpaper', 'colors'];
  const [open, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      <Dropdown open={open} setIsOpen={setIsOpen} title="Tools" dropdownClassName="w-[400px] p-2">
        {options.map((option, index) => (
          <ToolsOption key={`tools-${index}`} option={option} onClick={onSelectOption} />
        ))}
      </Dropdown>
    </div>
  );
};
