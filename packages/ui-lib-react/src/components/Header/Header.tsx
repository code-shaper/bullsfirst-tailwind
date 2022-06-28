import * as React from 'react';
import { CogIcon, LogoutIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToSettings = () => {
    navigate('/settings');
  };

  return (
    <header className="relative">
      <nav aria-label="Top">
        <div className="bg-primary-default">
          <div className="max-w-7xl mx-auto h-12 px-4 flex items-center justify-between">
            <span
              className="flex-1 text-white text-lg leading-none font-normal"
              onClick={navigateToHome}
            >
              {children}
            </span>

            <div className="flex flex-row">
              <button
                type="button"
                title="Settings"
                role="navigation"
                aria-label="Settings"
                className="bg-primary-default border-none cursor-pointer"
                onClick={navigateToSettings}
              >
                <CogIcon className="h-6 w-6 text-neutral-200 hover:text-neutral-100" />
              </button>

              <button
                type="button"
                title="Logout"
                role="navigation"
                aria-label="Logout"
                className="bg-primary-default border-none cursor-pointer ml-3"
                onClick={navigateToHome}
              >
                <LogoutIcon className="h-6 w-6 text-neutral-200 hover:text-neutral-100" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
