import { LinkButton, ViewCenteredContainer } from '@bullsfirst/ui-lib-react';
import logo from '../../assets/bullsfirst-logo.svg';

export function HomePage() {
  return (
    <ViewCenteredContainer className="bg-gradient">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" width="190" />
        <p className="mt-10 mb-10 text-3xl max-w-sm">
          Get better results with Bullsfirst at the helm of your portfolio.
        </p>
        <LinkButton color="primary" to="/accounts">
          Show My Accounts
        </LinkButton>
      </div>
    </ViewCenteredContainer>
  );
}
