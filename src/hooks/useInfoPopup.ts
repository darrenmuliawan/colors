import { atom, useAtom } from 'jotai';

export enum INFO_MESSAGE_TYPE {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}

const isOpenAtom = atom(false);
const messageAtom = atom('');
const triggeredAtom = atom(new Date().getTime());
const _typeAtom = atom(INFO_MESSAGE_TYPE.SUCCESS);

export const useInfoPopup = () => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [message, setMessage] = useAtom(messageAtom);
  const [triggered, setTriggered] = useAtom(triggeredAtom);
  const [type, setType] = useAtom(_typeAtom);

  const showPopup = (message: string, type = INFO_MESSAGE_TYPE.SUCCESS) => {
    setIsOpen(true);
    setMessage(message);
    setTriggered(new Date().getTime());
    setType(type);
  };

  const hidePopup = () => {
    setIsOpen(false);
    setMessage('');
  };

  return {
    isOpen,
    message,
    triggered,
    type,
    showPopup,
    hidePopup,
  };
};
