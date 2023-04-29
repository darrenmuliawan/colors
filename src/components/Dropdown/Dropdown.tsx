import { Button } from 'components/Button';
import React, { useEffect, useRef } from 'react';
import { classNames } from 'utils';

interface DropdownProps {
  title: string;
  className?: string;
  dropdownClassName?: string;
  children: React.ReactElement[];
  open: boolean;
  setIsOpen: (open: boolean) => void;
  style?: React.CSSProperties;
}

export const Dropdown = (props: DropdownProps) => {
  const { title, className = '', children, open, setIsOpen, dropdownClassName = '', style } = props;
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      <Button
        type="text"
        onClick={() => setIsOpen(!open)}
        className="text-white hover:text-text-tertiary font-semibold ring-0 outline-none focus:ring-0 active:ring-0"
        style={style}
      >
        {title}
      </Button>
      {open && (
        <div
          className={classNames(
            'origin-top-right flex flex-col justify-center items-center absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 pb-0',
            dropdownClassName
          )}
        >
          {renderedChildren}
        </div>
      )}
    </div>
  );
};
