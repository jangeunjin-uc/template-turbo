import { createPortal } from 'react-dom';
import ToastItem from './ToastItem';

export interface ToastProps {
  // isToastShow: boolean;
  toastItem: { id: string; title: string; actions?: { label: string; action: () => void } }[];
  // removeToast : (id:string)=> void;
}

export default function Toast({ toastItem }: ToastProps) {
  return createPortal(
    <div className="toast-wrap">
      {toastItem.map((toast) => (
        <ToastItem key={toast.id} {...toast} isShow />
      ))}
    </div>,
    document.getElementById('root') as HTMLDivElement,
  );
}
