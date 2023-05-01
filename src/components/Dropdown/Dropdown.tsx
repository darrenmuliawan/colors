import { Button } from 'components/Button';
import React, { useEffect, useRef } from 'react';
import { classNames } from 'utils';

interface DropdownProps {
  title?: string;
  className?: string;
  dropdownClassName?: string;
  children: React.ReactElement[];
  open: boolean;
  setIsOpen: (open: boolean) => void;
  style?: React.CSSProperties;
  buttonComponent?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // buttonDropdownRef?: React.RefObject<any>;
}

export const Dropdown = (props: DropdownProps) => {
  const {
    title = '',
    buttonComponent,
    className = '',
    children,
    open,
    setIsOpen,
    dropdownClassName = '',
    style,
    // buttonDropdownRef,
  } = props;
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const buttonRef = useRef<HTMLButtonElement>(null);
  // const [offsetWidth, setOffsetWidth] = useState(0);
  // console.log('offsetwidth: ', offsetWidth);

  // useEffect(() => {
  //   if (buttonDropdownRef?.current) {
  //     console.log('buttonDropdownRef.current.offsetWidth: ', buttonDropdownRef.current.offsetWidth);
  //     setOffsetWidth(buttonDropdownRef.current.offsetWidth);
  //   } else if (buttonRef.current) {
  //     setOffsetWidth(buttonRef.current.offsetWidth);
  //   }
  // }, [buttonDropdownRef, buttonRef]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  const renderedChildren = React.Children.map(children, (child) => React.cloneElement(child));

  return (
    <div ref={dropdownRef} className={classNames('relative inline-block', className)}>
      {buttonComponent ? (
        buttonComponent
      ) : (
        <Button
          // ref={buttonRef}
          type="text"
          onClick={() => setIsOpen(!open)}
          className="text-white hover:text-text-tertiary font-semibold ring-0 outline-none focus:ring-0 active:ring-0"
          style={style}
        >
          {title}
        </Button>
      )}
      {open && (
        <div
          className={classNames(
            'origin-top-right flex flex-col justify-center items-center absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2',
            dropdownClassName
          )}
        >
          <div className="relative w-full h-full bg-red-500">
            <div
              className="absolute w-3 h-3 bg-white transform rotate-45 -top-[16px] right-0 border-solid border-neutral shadow-lg border-r-0 border-b-0"
              // style={{
              //   left: `calc(50% - ${offsetWidth / 2}px)`,
              // }}
            ></div>
          </div>
          {renderedChildren}
        </div>
      )}
    </div>
  );
};
