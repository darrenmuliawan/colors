import CheckmarkIcon from 'assets/svg/checkmark.svg';
import ErrorIcon from 'assets/svg/error.svg';
import InfoIcon from 'assets/svg/info.svg';
import { INFO_MESSAGE_TYPE, useInfoPopup } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { classNames } from '../../utils';

export const InfoPopup = () => {
  const { isOpen, message, hidePopup, triggered, type } = useInfoPopup();
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

  const getIcon = () => {
    if (type === INFO_MESSAGE_TYPE.SUCCESS) {
      return <img src={CheckmarkIcon} alt="success" className="mr-3 h-[30px]" />;
    } else if (type === INFO_MESSAGE_TYPE.ERROR) {
      return <img src={ErrorIcon} alt="error" className="mr-3 h-[30px]" />;
    } else {
      return <img src={InfoIcon} alt="info" className="mr-3 h-[30px]" />;
    }
  };

  return (
    <div
      className={classNames(
        'flex left-1/2 transition-all duration-300 transform -translate-x-1/2 items-center fixed bottom-10 p-3 px-4 bg-white rounded-lg text-lg z-[5000] shadow-xl',
        show ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-0'
      )}
    >
      {getIcon()}
      <p className="text-black text-lg">{message}</p>
    </div>
  );
};
