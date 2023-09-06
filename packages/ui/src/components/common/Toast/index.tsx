import { createPortal } from 'react-dom';
import ToastItem from './ToastItem';

export interface ToastProps {
  toastItem: { id: string; title: string; actions?: { label: string; action: () => void } }[];
}

export default function Toast({ toastItem }: ToastProps) {
  return createPortal(
    <div className="toast-wrap">
      {toastItem.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </div>,
    document.getElementById('root') as HTMLDivElement,
  );
}
