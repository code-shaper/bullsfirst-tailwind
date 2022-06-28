import { Link } from 'react-router-dom';
import logo from '../../assets/bullsfirst-logo.svg';

export function HomePage() {
  return (
    <div className="view-vertical-container bg-gradient">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" width="190" />
        <p className="mt-10 mb-10 text-3xl max-w-sm">
          Get better results with Bullsfirst at the helm of your portfolio.
        </p>
        <Link className="btn-link" to="/accounts">
          Show My Accounts
        </Link>
      </div>
    </div>
  );
}
