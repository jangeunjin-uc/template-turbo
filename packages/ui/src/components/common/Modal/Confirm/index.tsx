import classNames from 'classnames';
import { ReactNode } from 'react';
import Button from '../../Button';
import ModalFooter from '../modalItem/ModalFooter';
import ModalHeader from '../modalItem/ModalHeader';

export interface ConfirmProps {
  className?: string;
  children: ReactNode;
  onCancle: () => void;
  onConfirm: () => void;
}

export default function Confirm({ className = '', children, onCancle, onConfirm }: ConfirmProps) {
  return (
    <div className={classNames('modal-confirm', [className])}>
      <ModalHeader title="안내" />
      <div className="modal-contents">{children}</div>
      <ModalFooter>
        <Button
          className="modal-footer--button cancle"
          variant="textOnly"
          label="취소"
          buttonColor="secondary"
          buttonSize="medium"
          buttonStyleType="outline"
          onClick={onCancle}
        />
        <Button
          className="modal-footer--button confirm"
          variant="textOnly"
          label="확인"
          buttonColor="primary"
          buttonSize="medium"
          buttonStyleType="contained"
          onClick={onConfirm}
        />
      </ModalFooter>
    </div>
  );
}
