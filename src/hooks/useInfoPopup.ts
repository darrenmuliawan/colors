import { atom, useAtom } from 'jotai';

const isOpenAtom = atom(false);
const messageAtom = atom('');
const triggeredAtom = atom(new Date().getTime());

export const useInfoPopup = () => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [message, setMessage] = useAtom(messageAtom);
  const [triggered, setTriggered] = useAtom(triggeredAtom);

  const showPopup = (message: string) => {
    setIsOpen(true);
    setMessage(message);
    setTriggered(new Date().getTime());
  };

  const hidePopup = () => {
    setIsOpen(false);
    setMessage('');
  };

  return {
    isOpen,
    message,
    triggered,
    showPopup,
    hidePopup,
  };
};
