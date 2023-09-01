import classNames from 'classnames';
import { ReactNode } from 'react';
import Button from '../../Button';
import ModalFooter from '../modalItem/ModalFooter';
import ModalHeader from '../modalItem/ModalHeader';

export interface AlertProps {
  children: ReactNode;
  className?: string;
  onClose: () => void;
}

export default function Alert({ children, className = '', onClose }: AlertProps) {
  return (
    <div className={classNames('modal-alert', [className])}>
      <ModalHeader title="안내" />
      <div className="modal-contents">{children}</div>
      <ModalFooter>
        <Button
          className="modal-footer--button cancle"
          variant="textOnly"
          label="확인"
          buttonColor="primary"
          buttonSize="medium"
          buttonStyleType="contained"
          onClick={onClose}
        />
      </ModalFooter>
    </div>
  );
}
