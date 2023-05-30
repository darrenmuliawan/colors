import { ToolsDropdown } from './ToolsDropdown';
import { useRef } from 'react';
import { Logo } from 'ui';

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <header className="px-10  flex items-center justify-between py-4  bg-opacity-[15%] bg-white absolute top-0 w-full h-[100px] z-[100]">
      <Logo />
      <div className="flex items-center pl-10" ref={headerRef}>
        <ToolsDropdown stayOpenRef={headerRef} />
        {/* <Button className="rounded-full text-2xl group" type="secondary" shadow outlined>
          <p className="transition duration-300">coming soon &#128064;</p>
        </Button> */}
      </div>
    </header>
  );
};
