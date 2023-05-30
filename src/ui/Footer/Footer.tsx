import { Link } from 'react-router-dom';
import { Logo } from 'ui/Logo';

export const Footer = () => {
  return (
    <div className="p-10 bg-white">
      <div className="grid grid-cols-2 border-b border-solid border-0 pb-10 border-neutral-300">
        <Logo />
        <div className="grid grid-cols-3">
          <div>
            <p className="text-xl font-bold mb-2">Tools</p>
            <Link to="/">
              <p className="text-lg hover:underline cursor-pointer">Palette generator</p>
            </Link>
            <Link to="/colors">
              <p className="text-lg hover:underline cursor-pointer">Explore colors</p>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      <div className="mt-4">
        <p>© 2023 Chromax</p>
      </div>
    </div>
  );
};
