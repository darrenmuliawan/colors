import Logo from 'assets/logo.png';
import { Button } from 'components';
import { ToolsDropdown } from './ToolsDropdown';
import { useRef } from 'react';

export const Header = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.documentElement.classList.add('dark');
  // } else {
  //   document.documentElement.classList.remove('dark')
  // }
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <header className="px-10  flex items-center justify-between py-4  bg-opacity-[15%] bg-white absolute top-0 w-full h-[100px] z-[100]">
      <div className="flex items-center">
        <img
          src={Logo}
          height={60}
          width={65}
          alt="Chromax.io - best color palette generator on the internet"
        />
        <h1 className="text-logo text-5xl font-bold mb-0 ml-3">Chromax</h1>
      </div>
      <div className="flex items-center pl-10" ref={headerRef}>
        <ToolsDropdown stayOpenRef={headerRef} />
        <Button className="rounded-full text-2xl group" type="secondary">
          <p className="transition duration-300">coming soon &#128064;</p>
        </Button>
      </div>
    </header>
  );
};
