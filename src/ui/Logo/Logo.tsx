import { Link } from 'react-router-dom';
import LogoImg from 'assets/logo.png';

export const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center cursor-pointer">
        <img
          src={LogoImg}
          height={60}
          width={65}
          alt="Chromax.io - best color palette generator on the internet"
        />
        <h1 className="text-logo text-5xl font-bold mb-0 ml-3">Chromax</h1>
      </div>
    </Link>
  );
};
