import { X } from '@phosphor-icons/react';
import classNames from 'classnames';
import { ReactNode, useRef } from 'react';
import { SIZE_TYPE, SizeType } from '../../../types/constants';
import Button from '../Button';
import Portal from '../Portal';

export interface ModalProps {
  modalItem: {
    id: string;
    className?: string;
    content: ReactNode;
    size?: SizeType;
  }[];
}

export default function Modal({ modalItem }: ModalProps) {
  const mainEl = useRef<HTMLDivElement>(null);

  // useClickOutSide(mainEl, handleClose);
  // const handleClose = ()=> {}

  return (
    <Portal rootId="modalWrap" className="modal-wrap">
      {modalItem.map(({ id, className, content, size = SIZE_TYPE.MEDIUM }) => (
        <div id={id} className={classNames('modal', [className])} key={id} ref={mainEl}>
          <div className="modal-container" data-size={size}>
            <Button
              className="modal-close"
              variant="iconOnly"
              buttonStyleType="ghost"
              buttonSize="small"
              icon={<X size={20} />}
            />

            {content}
          </div>
        </div>
      ))}
    </Portal>
  );
}
