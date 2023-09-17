import classNames from 'classnames';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { SIZE_TYPE, SizeType } from '../../../types/constants';

export interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'css'> {
  labelPosition?: 'left' | 'right';
  label: ReactNode;
  checkboxSize?: SizeType;
  checkboxColor?: 'primary' | 'secondary' | 'blue';
  className?: string;
}

function CheckBox({
  id,
  labelPosition = 'right',
  label,
  checkboxSize = SIZE_TYPE.MEDIUM,
  checkboxColor = 'primary',
  className = undefined,
  checked,
  ...rest
}: CheckBoxProps) {
  return (
    <span
      className={classNames('checkbox', { checked }, className)}
      data-size={checkboxSize}
      data-label-position={labelPosition}
      data-box-color={checkboxColor}
    >
      {labelPosition === 'left' && (
        <label htmlFor={id} className="checkbox--label">
          {label}
        </label>
      )}
      <input type="checkbox" id={id} checked={checked} {...rest} hidden />
      {labelPosition === 'right' && (
        <label htmlFor={id} className="checkbox--label">
          {label}
        </label>
      )}
    </span>
  );
}

export default forwardRef(CheckBox);
