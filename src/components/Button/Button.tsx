import { classNames } from 'utils';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  type?: 'primary' | 'secondary' | 'neutral' | 'text';
  active?: boolean;
  shadow?: boolean;
  outlined?: boolean;
  ref?: React.RefObject<HTMLButtonElement>;
  tooltipTitle?: string;
  tooltipId?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    disabled = false,
    onClick,
    className = '',
    style,
    type = 'primary',
    active = false,
    shadow = false,
    outlined = false,
    ref,
    tooltipTitle,
    tooltipId,
  } = props;

  return (
    <button
      ref={ref}
      className={classNames(
        'px-6 py-3 rounded-lg transition duration-300',
        disabled ? 'bg-disabled cursor-default' : 'cursor-pointer',
        type === 'primary'
          ? 'bg-primary hover:bg-primary-hover text-text-primary hover:text-text-primary-hover'
          : '',
        type === 'secondary'
          ? 'bg-secondary hover:bg-secondary-hover text-text-secondary hover:text-text-secondary-hover'
          : '',
        type === 'neutral' ? 'bg-white hover:bg-neutral' : '',
        type === 'text'
          ? 'shadow-none text-2xl bg-transparent hover:shadow-none text-primary hover:text-primary-hover'
          : '',
        active ? 'ring-2 ring-offset-2 ring-primary' : '',
        shadow ? 'shadow-md hover:shadow-xl active:shadow-none' : '',
        outlined ? 'focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none' : '',
        className
      )}
      style={style}
      onClick={onClick}
      disabled={disabled}
      data-tooltip-id={tooltipId}
      data-tooltip-content={tooltipTitle}
    >
      {children}
    </button>
  );
};
