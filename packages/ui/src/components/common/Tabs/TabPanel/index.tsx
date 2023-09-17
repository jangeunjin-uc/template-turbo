import classNames from 'classnames';
import { ReactNode } from 'react';

interface TabPanelProps {
  children: ReactNode;
  className?: string;
}

export default function TabPanel({ children, className = undefined }: TabPanelProps) {
  return <div className={classNames('tab-panel', className)}>{children}</div>;
}
