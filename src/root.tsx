import { InfoPopup } from 'components';
import { Outlet } from 'react-router-dom';
import { Header } from 'ui';

export const Root = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <InfoPopup />
    </div>
  );
};
