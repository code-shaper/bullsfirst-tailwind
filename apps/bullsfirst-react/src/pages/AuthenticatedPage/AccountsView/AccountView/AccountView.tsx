import { VerticalContainer } from '@bullsfirst/ui-lib-react';
import { Outlet } from 'react-router';
import { AccountHeader } from '../../../../components';

export const AccountView = () => {
  return (
    <VerticalContainer>
      <AccountHeader />
      <Outlet />
    </VerticalContainer>
  );
};
