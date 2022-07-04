import { Header, ViewVerticalContainer } from '@bullsfirst/ui-lib-react';
import { Outlet } from 'react-router-dom';

export function AuthenticatedPage() {
  return (
    <ViewVerticalContainer>
      <Header>Bullsfirst</Header>
      <Outlet />
    </ViewVerticalContainer>
  );
}
