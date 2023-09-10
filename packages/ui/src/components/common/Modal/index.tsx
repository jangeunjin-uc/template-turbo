import { X } from '@phosphor-icons/react';
import classNames from 'classnames';
import { useRef, ReactNode } from 'react';
import { SIZE_TYPE, SizeType } from '../../../types/constants';
import useClickOutSide from '../../utils/useClickOutSide';
import Button from '../Button';
import Portal from '../Portal';

export interface ModalProps {
  modalItem: {
    id: string;
    className?: string;
    content: ReactNode;
    size?: SizeType;
  }[];
  modalHide: (id: string) => void;
}

export default function Modal({ modalItem, modalHide }: ModalProps) {
  const mainEl = useRef<HTMLDivElement>(null);

  const handleClose = (id: string) => modalHide(id);

  useClickOutSide({
    elRef: mainEl,
    onClickOutside: () => handleClose(modalItem[modalItem.length - 1].id),
  });

  return (
    <Portal rootId="modalWrap" className="modal-wrap">
      {modalItem.map(({ id, className, content, size = SIZE_TYPE.MEDIUM }) => (
        <div id={id} className={classNames('modal', [className])} key={id}>
          <div className="modal-container" data-size={size} ref={mainEl}>
            <Button
              className="modal-close"
              variant="iconOnly"
              buttonStyleType="ghost"
              buttonSize="small"
              icon={<X size={20} />}
              onClick={() => handleClose(id)}
            />

            {content}
          </div>
        </div>
      ))}
    </Portal>
  );
}
