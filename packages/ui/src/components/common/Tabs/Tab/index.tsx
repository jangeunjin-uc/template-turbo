import classNames from 'classnames';
import { MouseEvent } from 'react';
import Button from '../../Button';

interface TabProps {
  value: string;
  label: string;
  activeTab: string;
  handleClick: (ev: MouseEvent<HTMLButtonElement>) => void;
}

export default function Tab({ value, label, activeTab, handleClick }: TabProps) {
  return (
    <div className={classNames('tab', { active: activeTab === value })}>
      <Button
        className="tab--button"
        variant="textOnly"
        label={label}
        value={value}
        onClick={(ev) => handleClick(ev)}
      />
    </div>
  );
}
