import * as React from 'react';

interface AccountHeaderProps {
  children?: React.ReactNode;
}

export function AccountHeader({ children }: AccountHeaderProps) {
  return <div>{children}</div>;
}
