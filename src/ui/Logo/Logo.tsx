import { Link } from 'react-router-dom';
import LogoImg from 'assets/logo.png';

interface LogoProps {
  onClose?: () => void;
}

export const Logo = (props: LogoProps) => {
  const { onClose } = props;

  return (
    <Link to="/" onClick={onClose}>
      <div className="flex items-center cursor-pointer">
        <img
          src={LogoImg}
          height={60}
          width={65}
          alt="Chromax.io - best color palette generator on the internet"
          className="lg:h-[60px] lg:w-[65px] h-[40px] w-[45px]"
        />
        <h1 className="text-logo text-3xl lg:text-5xl font-bold mb-0 ml-3">Chromax</h1>
      </div>
    </Link>
  );
};
