import Logo from 'assets/logo.png';

export const Header = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.documentElement.classList.add('dark');
  // } else {
  //   document.documentElement.classList.remove('dark')
  // }

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
      <div className="flex items-center">
        <button className="rounded-full text-2xl bg-secondary px-8 py-3 cursor-pointer shadow-lg hover:bg-secondary-hover transition duration-300 group hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:shadow-none focus:outline-none">
          <p className="text-text-secondary group-hover:text-text-secondary-hover transition duration-300">
            we&apos;re cooking something &#128064;
          </p>
        </button>
      </div>
    </header>
  );
};
