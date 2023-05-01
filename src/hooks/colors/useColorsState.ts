import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const _selectedColor = atom('#FFFFFF');
const _wallpaperVisible = atom(false);
const _wallpaperStyle = atom('1');
const _shouldShowHelp = atom(false);

export const useColorsState = () => {
  const [selectedColor, setSelectedColor] = useAtom(_selectedColor);
  const [wallpaperVisible, setWallpaperVisible] = useAtom(_wallpaperVisible);
  const [wallpaperStyle, setWallpaperStyle] = useAtom(_wallpaperStyle);
  const [shouldShowHelp, setShouldShowHelp] = useAtom(_shouldShowHelp);
  const HELP_LOCAL_KEY = 'wallpaper-editor-help-visible';

  useEffect(() => {
    //   const showHelp = localStorage.getItem(HELP_LOCAL_KEY);
    //   if (showHelp === null || showHelp === 'true') {
    //     setShouldShowHelp(true);
    //   } else {
    //     setShouldShowHelp(false);
    //   }
  }, []);

  const openWallpaper = (color: string) => {
    setSelectedColor(color);
    setWallpaperVisible(true);
  };

  const closeWallpaper = () => {
    setWallpaperVisible(false);
  };

  const closeHelp = () => {
    setShouldShowHelp(false);
    localStorage.setItem(HELP_LOCAL_KEY, 'false');
  };

  const openHelp = () => {
    setShouldShowHelp(true);
    localStorage.setItem(HELP_LOCAL_KEY, 'true');
  };

  return {
    selectedColor,
    wallpaperVisible,
    wallpaperStyle,
    setSelectedColor,
    openWallpaper,
    closeWallpaper,
    setWallpaperStyle,
    shouldShowHelp,
    openHelp,
    closeHelp,
  };
};
