import classNames from 'classnames';
import { ReactNode } from 'react';
import Header from '../Header';

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

export default function LayoutWithHeader({ className = '', children }: LayoutProps) {
  return (
    <>
      <Header />
      <main id="main">
        <div className={classNames('page', { className })}>{children}</div>
      </main>
    </>
  );
}
