import { classNames } from 'utils';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  type?: 'primary' | 'secondary' | 'text';
}

export const Button = (props: ButtonProps) => {
  const { children, disabled = false, onClick, className = '', style, type = 'primary' } = props;

  return (
    <button
      className={classNames(
        'px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:shadow-none focus:outline-none',
        disabled ? 'bg-disabled cursor-default' : 'cursor-pointer',
        type === 'primary'
          ? 'bg-primary hover:bg-primary-hover text-text-primary hover:text-text-primary-hover'
          : '',
        type === 'secondary'
          ? 'bg-secondary hover:bg-secondary-hover text-text-secondary hover:text-text-secondary-hover'
          : '',
        type === 'text'
          ? 'shadow-none text-2xl bg-transparent hover:shadow-none text-primary hover:text-primary-hover'
          : '',
        className
      )}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
