import * as React from 'react';

interface SimpleHeaderProps {
  children?: React.ReactNode;
}

export function SimpleHeader({ children }: SimpleHeaderProps) {
  return (
    <header className="relative">
      <nav aria-label="Top">
        <div className="bg-primary-default">
          <div className="max-w-7xl mx-auto h-12 px-4 flex items-center justify-between">
            <span className="flex-1 text-base font-medium text-white">
              {children}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
