import { Logo } from 'ui/Logo';
import CloseIcon from 'assets/svg/close.svg';
import { classNames } from 'utils';
import { Link } from 'react-router-dom';

interface MobileOptionsProps {
  open: boolean;
  onClose: () => void;
}

export const MobileOptions = (props: MobileOptionsProps) => {
  const { open, onClose } = props;

  return (
    <div
      className={classNames(
        'h-screen w-screen absolute top-0 left-0 p-6 bg-white transition duration-500 ease-out',
        open ? '' : '-translate-x-[100vw]'
      )}
    >
      <div className="flex justify-between mb-10">
        <Logo onClose={onClose} />
        <button onClick={onClose}>
          <img src={CloseIcon} alt="close menu bar" height={40} width={40} />
        </button>
      </div>
      <div>
        <Link to="/" onClick={onClose}>
          <p className="text-2xl font-semibold mb-2">Palette Generator</p>
        </Link>
        <Link to="/colors" onClick={onClose}>
          <p className="text-2xl font-semibold mb-2">Colors</p>
        </Link>
      </div>
    </div>
  );
};
