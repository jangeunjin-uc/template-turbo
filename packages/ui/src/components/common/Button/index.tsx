import classNames from 'classnames';
import { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import { SIZE_TYPE, SizeType } from '../../../types/constants';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'css'> {
  variant: 'textOnly' | 'iconOnly' | 'textIcon';
  buttonStyleType?: 'contained' | 'outline' | 'ghost';
  label?: string;
  icon?: ReactNode;
  textIconPosition?: 'left' | 'right';
  buttonSize?: SizeType;
  buttonColor?: 'primary' | 'secondary' | 'blue';
}

function Button(
  {
    className,
    children,
    variant,
    label = undefined,
    icon = undefined,
    buttonStyleType = undefined,
    textIconPosition = undefined,
    buttonSize = SIZE_TYPE.MEDIUM,
    buttonColor = undefined,
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      type="button"
      className={classNames('btn', [className])}
      {...rest}
      ref={ref}
      data-variant={variant}
      data-style-type={buttonStyleType}
      data-icon-position={textIconPosition}
      data-size={buttonSize}
      data-color={buttonColor}
    >
      {variant === 'textIcon' && textIconPosition === 'left' && icon}
      {variant !== 'iconOnly' ? <span className="btn__label">{label}</span> : icon}
      {variant === 'textIcon' && textIconPosition === 'right' && icon}
      {children}
    </button>
  );
}

export default forwardRef(Button);
