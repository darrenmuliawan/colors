import { InfoPopup } from 'components';
import { useGeneratorColor } from 'hooks';
import { Outlet } from 'react-router-dom';
import { Header } from 'ui';

export const Root = () => {
  const { backgroundColor } = useGeneratorColor();
  return (
    <div
      className=""
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Header />
      <Outlet />
      <InfoPopup />
    </div>
  );
};
