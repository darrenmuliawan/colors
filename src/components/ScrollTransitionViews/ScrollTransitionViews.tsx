import React, { useState, useEffect, useRef } from 'react';

export const ScrollTransitionViews: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<number>(0);
  const views = ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500'];
  const [deltaY, setDeltaY] = useState(0);

  const handleScroll = (e: WheelEvent) => {
    // block the default scroll
    e.preventDefault();

    // store how much the user has scrolled
    // console.log('view: ', view);
    // console.log(e.deltaY);
    // const sign = Math.sign(e.deltaY);
    console.log('deltaY: ', deltaY, 'e.deltaY: ', e.deltaY, e);
    const currentDeltaY = deltaY + e.deltaY;
    setDeltaY((prev) => Math.max(0, Math.min(5 * 250, prev + e.deltaY)));
    console.log('current delta Y: ', currentDeltaY);

    // if ((sign > 0 && e.deltaY > 50) || (sign < 0 && e.deltaY < -50)) {
    // const nextView = view + Math.sign(e.deltaY);
    const nextView = Math.floor(currentDeltaY / 250); //view + Math.sign(e.deltaY);
    if (nextView >= 0 && nextView !== view && nextView < views.length) {
      setView(nextView);
    }
    // }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('wheel', (e) => {
        e.preventDefault();
        handleScroll(e);
      });
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('wheel', (e) => {
          e.preventDefault();
          handleScroll(e);
        });
      }
    };
  }, [view, ref.current, deltaY, setDeltaY]);

  return (
    <div
      ref={ref}
      className={`h-screen w-screen transition-colors duration-500 ${views[view]}`}
    ></div>
  );
};

// Debounce function
// const debounce = (func: (e: React.WheelEvent) => void, wait: number) => {
//   let timeout: number;
//   return function executedFunction(e: React.WheelEvent) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(e);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// };
