import Logo from 'assets/logo.png';
import { Button } from 'components';
import { ToolsDropdown } from './ToolsDropdown';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGeneratorColor } from 'hooks';

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { primaryButtonColor } = useGeneratorColor();
  const path = window.location.pathname;

  return (
    <header className="px-10  flex items-center justify-between py-4  bg-opacity-[15%] bg-white absolute top-0 w-full h-[100px] z-[100]">
      <Link to="/">
        <div className="flex items-center cursor-pointer">
          <img
            src={Logo}
            height={60}
            width={65}
            alt="Chromax.io - best color palette generator on the internet"
          />
          <h1
            className="text-logo text-5xl font-bold mb-0 ml-3"
            style={{
              color: path === '/' ? primaryButtonColor : '',
            }}
          >
            Chromax
          </h1>
        </div>
      </Link>
      <div className="flex items-center pl-10" ref={headerRef}>
        <ToolsDropdown stayOpenRef={headerRef} />
        <Button className="rounded-full text-2xl group" type="secondary" shadow outlined>
          <p className="transition duration-300">coming soon &#128064;</p>
        </Button>
      </div>
    </header>
  );
};
