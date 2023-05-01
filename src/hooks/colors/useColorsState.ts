import { atom, useAtom } from 'jotai';

const _selectedColor = atom('#FFFFFF');
const _wallpaperVisible = atom(false);

export const useColorsState = () => {
  const [selectedColor, setSelectedColor] = useAtom(_selectedColor);
  const [wallpaperVisible, setWallpaperVisible] = useAtom(_wallpaperVisible);

  const openWallpaper = (color: string) => {
    setSelectedColor(color);
    setWallpaperVisible(true);
  };

  const closeWallpaper = () => {
    setWallpaperVisible(false);
  };

  return {
    selectedColor,
    wallpaperVisible,
    setSelectedColor,
    openWallpaper,
    closeWallpaper,
  };
};
