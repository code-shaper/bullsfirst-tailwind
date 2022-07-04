import { HorizontalContainer } from '@bullsfirst/ui-lib-react';
import { Outlet } from 'react-router-dom';
import { AccountsSideBar } from '../../../components';

export function AccountsView() {
  return (
    <HorizontalContainer className="min-h-0">
      <AccountsSideBar />
      <Outlet />
    </HorizontalContainer>
  );
}
