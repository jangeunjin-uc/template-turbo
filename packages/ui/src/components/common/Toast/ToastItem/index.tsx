import { CaretRight } from '@phosphor-icons/react';
import classNames from 'classnames';
import Button from '../../Button';

export interface ToastItemProps {
  id: string;
  title: string;
  actions?: { label: string; action: () => void };
}

export default function ToastItem({ id, title, actions = undefined }: ToastItemProps) {
  return (
    <div id={id} className={classNames('toast-container', { isShow: true })}>
      <span>{title}</span>
      {actions && (
        <Button
          className="toast--button"
          variant="textIcon"
          buttonStyleType="ghost"
          buttonSize="medium"
          label={actions.label}
          onClick={actions.action}
          textIconPosition="right"
          icon={<CaretRight />}
        />
      )}
    </div>
  );
}
