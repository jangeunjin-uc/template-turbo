import { CaretRight } from '@phosphor-icons/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { SIZE_TYPE } from '../../../../types/constants';
import Button from '../../Button';

export interface ToastItemProps {
  id: string;
  title: string;
  actions?: { label: string; action: () => void };
  toastHide: (id: string) => void;
}

export default function ToastItem({ id, title, actions = undefined, toastHide }: ToastItemProps) {
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const hideToast = setTimeout(() => setIsShow(true), 1000);
    const removeToast = setTimeout(() => {
      setIsShow(false);
      toastHide(id);
    }, 3000);

    return () => {
      clearTimeout(hideToast);
      clearTimeout(removeToast);
    };
  }, []);

  return (
    <div id={id} className={classNames('toast-container', { isShow })}>
      <span>{title}</span>
      {actions && (
        <Button
          className="toast--button"
          variant="textIcon"
          buttonStyleType="ghost"
          buttonSize={SIZE_TYPE.SMALL}
          label={actions.label}
          onClick={actions.action}
          textIconPosition="right"
          icon={<CaretRight />}
        />
      )}
    </div>
  );
}
