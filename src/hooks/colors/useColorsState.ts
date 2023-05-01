import { atom, useAtom } from 'jotai';

const _selectedColor = atom('#FFFFFF');
const _wallpaperVisible = atom(false);
const _wallpaperStyle = atom('1');

export const useColorsState = () => {
  const [selectedColor, setSelectedColor] = useAtom(_selectedColor);
  const [wallpaperVisible, setWallpaperVisible] = useAtom(_wallpaperVisible);
  const [wallpaperStyle, setWallpaperStyle] = useAtom(_wallpaperStyle);

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
    wallpaperStyle,
    setSelectedColor,
    openWallpaper,
    closeWallpaper,
    setWallpaperStyle,
  };
};
