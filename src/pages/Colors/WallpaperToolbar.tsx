/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useColorsState } from 'hooks';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { classNames } from 'utils';
import { ReactComponent as DownloadIcon } from 'assets/svg/download.svg';
import { ReactComponent as HelpIcon } from 'assets/svg/help.svg';

interface WallpaperToolbarProps {
  toolbarRef: React.RefObject<HTMLDivElement>;
  stylesToolbarRef: React.RefObject<HTMLDivElement>;
  wallpaperRef: React.RefObject<HTMLDivElement>;
  downloadButtonRef: React.RefObject<HTMLDivElement>;
  helpButtonRef: React.RefObject<HTMLDivElement>;
}

export const WallpaperToolbar = (props: WallpaperToolbarProps) => {
  const { wallpaperRef, toolbarRef, stylesToolbarRef, helpButtonRef, downloadButtonRef } = props;
  const [loading, setLoading] = useState(false);
  const { selectedColor, wallpaperStyle, setWallpaperStyle, openHelp } = useColorsState();
  const WALLPAPER_STYLES = [
    {
      name: '1',
      style: 'article-name',
    },
    {
      name: '2',
      style: 'center',
    },
    {
      name: '3',
      style: 'clean',
    },
  ];

  const downloadImage = async (node: HTMLDivElement | null, filename: string) => {
    setLoading(true);
    if (node) {
      const canvas = await html2canvas(node);

      const link = document.createElement('a');
      link.download = `${filename}.jpg`;
      link.href = canvas.toDataURL('image/jpeg');
      link.click();
    }
    setLoading(false);
  };

  return (
    <div
      className={classNames(
        'absolute right-10 top-1/2 -translate-y-1/2 p-1 bg-neutral flex items-center rounded-lg duration-300 transition-all cursor-pointer bg-opacity-30 text-2xl flex-col shadow-2xl z-[1001]',
        loading ? 'cursor-wait' : ''
      )}
      ref={toolbarRef}
    >
      <div className="p-1">
        <div
          className="flex items-center justify-center rounded-md bg-white p-2 bg-opacity-30 hover:bg-opacity-100 w-full mb-2 duration-300"
          onClick={() => downloadImage(wallpaperRef.current, `custom-${selectedColor}`)}
          ref={downloadButtonRef}
        >
          <DownloadIcon height={28} width={28} className="" />
        </div>
        <div
          className="flex items-center justify-center rounded-md bg-white p-2 bg-opacity-30 hover:bg-opacity-100 w-full mb-2 duration-300"
          onClick={openHelp}
          ref={helpButtonRef}
        >
          <HelpIcon height={28} width={28} className="" />
        </div>
      </div>
      <div className="bg-white h-[2px] bg-opacity-30 w-full mb-2"></div>
      <div ref={stylesToolbarRef} className="w-full">
        {WALLPAPER_STYLES.map((style, index) => (
          <div className="p-1 w-full" key={`wallpaper-style-${index}`}>
            <div
              className={classNames(
                'flex items-center justify-center rounded-md bg-white p-2 bg-opacity-30 hover:bg-opacity-100 w-full mb-2 duration-300 last:mb-0',
                wallpaperStyle === style.name ? 'bg-opacity-100' : ''
              )}
              onClick={() => setWallpaperStyle(style.name)}
            >
              <p className="text-lg font-bold">{style.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
