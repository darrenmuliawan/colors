import CheckmarkIcon from 'assets/svg/checkmark.svg';
import { useInfoPopup } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { classNames } from 'utils';

export const InfoPopup = () => {
  const { isOpen, message, hidePopup, triggered } = useInfoPopup();
  const closeTimerRef = useRef<number>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }

      closeTimerRef.current = setTimeout(() => {
        setShow(false);
        hidePopup();
      }, 5000);
    }
  }, [isOpen, hidePopup, triggered]);

  return (
    <div
      className={classNames(
        'flex left-1/2 transition-all duration-300 transform -translate-x-1/2 items-center fixed bottom-10 p-3 px-4 bg-white rounded-lg text-lg z-[1000] shadow-xl',
        show ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-0'
      )}
    >
      <img src={CheckmarkIcon} alt="copied to clipboard" className="mr-3 h-[30px]" />
      <p>{message}</p>
    </div>
  );
};
