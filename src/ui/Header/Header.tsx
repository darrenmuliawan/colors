import { ToolsDropdown } from './ToolsDropdown';
import { useRef, useState } from 'react';
import { Logo } from 'ui';
import HamburgerIcon from 'assets/svg/hamburger.svg';
import { MobileOptions } from './MobileOptions';

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [showMobileOptions, setShowMobileOptions] = useState(false);

  return (
    <header className="lg:px-10 px-6  flex items-center justify-between py-4  bg-opacity-[15%] bg-white absolute top-0 w-full h-[100px] z-[100]">
      <Logo />
      <div className="items-center pl-10 hidden lg:flex" ref={headerRef}>
        <ToolsDropdown stayOpenRef={headerRef} />
        {/* <Button className="rounded-full text-2xl group" type="secondary" shadow outlined>
          <p className="transition duration-300">coming soon &#128064;</p>
        </Button> */}
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={() => setShowMobileOptions(true)}>
          <img src={HamburgerIcon} alt="mobile menu bar" />
        </button>
      </div>
      <MobileOptions open={showMobileOptions} onClose={() => setShowMobileOptions(false)} />
    </header>
  );
};
