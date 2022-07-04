import { VerticalContainer } from '@bullsfirst/ui-lib-react';
import { Link } from 'react-router-dom';

export function SettingsView() {
  return (
    <VerticalContainer className="p-4">
      <h2 className="text-2xl">Settings</h2>
      <Link className="link mt-6" to="/accounts">
        Back to Accounts
      </Link>
    </VerticalContainer>
  );
}
