import { Container } from 'components';
import { BASE_COLOR } from 'constants';
import { ColorPalette } from './ColorPalette';
import { WallpaperEditor } from './WallpaperEditor';

export const ColorsPage = () => {
  return (
    <Container>
      <section className="relative h-[66vh] w-full flex flex-col items-center justify-evenly py-[100px]">
        <div className="flex items-center justify-center w-full h-full">
          <h1 className="text-5xl font-bold text-center">Colors</h1>
        </div>
        <div className="w-full flex items-center justify-center flex-col h-full">
          <h2 className="text-3xl w-[66%] text-center">
            Dive into a collection of 100+ curated colors, hand-picked to elevate your digital
            experience. Customize your phone or computer wallpaper with your favorite hue from our
            kaleidoscopic array of colors and add some personality to your devices.
          </h2>
        </div>
        {/* <div className="w-full h-full flex justify-center items-center">color selection here</div> */}
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
        {Object.keys(BASE_COLOR).map((color, index) => (
          <ColorPalette color={color} key={`color-${index}`} />
        ))}
      </div>
      <WallpaperEditor />
    </Container>
  );
};
