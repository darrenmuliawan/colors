export const smoothScroll = (targetId: string, offset = 0): void => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - offset;
  const duration = 1000; // adjust to control the scrolling speed

  const animate = (currentTime: number, start: number): void => {
    if (!start) start = currentTime;
    const progress = currentTime - start;
    const scrollTo = easeInOutQuad(progress, startPosition, distance, duration);
    window.scrollTo(0, scrollTo);
    if (progress < duration) requestAnimationFrame((time) => animate(time, start));
  };

  // linear interpolation function
  const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame((time) => animate(time, 0));
};

export const smoothScrollToDownloadCSS = () => {
  smoothScroll('generator-explanation');
  setTimeout(() => {
    const target = document.getElementById('download-css');
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 5000; // adjust to control the scrolling speed
    const targetDiv = document.querySelector('#generator-explanation');

    const animate = (currentTime: number, start: number, targetDiv: Element): void => {
      if (!start) start = currentTime;
      const progress = currentTime - start;
      const scrollTo = easeInOutQuad(progress, startPosition, distance, duration);
      targetDiv.scrollTo(0, scrollTo);
      if (progress < duration) requestAnimationFrame((time) => animate(time, start, targetDiv));
    };

    // linear interpolation function
    const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    if (targetDiv) {
      requestAnimationFrame((time) => animate(time, 0, targetDiv));
    }
  }, 1000);
};
