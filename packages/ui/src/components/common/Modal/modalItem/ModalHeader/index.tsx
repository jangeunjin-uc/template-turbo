import { ReactNode } from 'react';

export interface ModalHeaderProps {
  title?: string;
  children?: ReactNode;
}

export default function ModalHeader({ title, children }: ModalHeaderProps) {
  return (
    <div className="modal-header">
      {title && <strong className="modal-header--title">{title}</strong>}
      {children}
    </div>
  );
}
