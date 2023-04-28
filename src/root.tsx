import { InfoPopup } from 'components';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <Outlet />
      <InfoPopup />
    </>
  );
};
