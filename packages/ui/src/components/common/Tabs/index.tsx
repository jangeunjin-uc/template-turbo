import classNames from 'classnames';
import { MouseEvent, ReactNode, useState } from 'react';
import Tab from './Tab';

export interface TabsProps {
  tabs: { id: string; label: string }[];
  className?: string;
  tabContent: ReactNode[];
}

export default function Tabs({ tabs, className = undefined, tabContent }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const val = ev.currentTarget.value;

    return setActiveTab(val);
  };

  return (
    <div className={classNames('tabs-wrap', className)}>
      <div className="tab-area">
        {tabs.map(({ id, label }) => (
          <Tab label={label} value={id} key={id} activeTab={activeTab} handleClick={handleClick} />
        ))}
      </div>
      <div className="tab-panel-area">
        {tabContent[tabs.findIndex((tab) => tab.id === activeTab)]}
      </div>
    </div>
  );
}
