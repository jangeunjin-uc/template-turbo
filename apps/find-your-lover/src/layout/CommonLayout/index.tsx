import classNames from 'classnames';
import { ReactNode } from 'react';

interface CommonLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function CommonLayout({ children, className = '' }: CommonLayoutProps) {
  return (
    <div className={classNames('layout', className)}>
      <div className="contents-wrapper">{children}</div>
    </div>
  );
}
