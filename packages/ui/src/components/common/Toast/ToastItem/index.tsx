import Button from '../../Button';

export interface ToastItemProps {
  id: string;
  title: string;
  actions?: { label: string; action: () => void };
}

export default function ToastItem({ id, title, actions = undefined }: ToastItemProps) {
  return (
    <div id={id} className="toast-container">
      <span>{title}</span>
      {actions && (
        <Button
          className="toast--button"
          variant="textOnly"
          buttonStyleType="ghost"
          label={actions.label}
          onClick={actions.action}
        />
      )}
    </div>
  );
}
