import { ReactNode } from 'react';

export interface ModalFooterProps {
  children: ReactNode;
}

export default function ModalFooter({ children }: ModalFooterProps) {
  return <div className="modal-footer">{children}</div>;
}
