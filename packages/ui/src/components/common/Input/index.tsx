import classNames from 'classnames';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { SIZE_TYPE, SizeType } from '../../../types/constants';
import Button from '../Button';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'csss'> {
  id: string;
  className?: string;
  variant: 'inputOnly' | 'withLabel' | 'withButton' | 'withIcon';
  inputStyleType?: 'rounded' | 'outline' | 'underline';
  label?: string;
  icon?: ReactNode;
  textIconPosition?: 'left' | 'right';
  inputSize?: SizeType;
  inputColor?: 'primary' | 'secondary' | 'blue';
  onClickButton?: () => void;
  buttonProps?: {
    label?: string;
    variant?: 'textOnly' | 'iconOnly' | 'textIcon';
    icon?: ReactNode;
    textIconPosition?: 'left' | 'right';
  };
}

function Input({
  id,
  className = undefined,
  children,
  variant,
  inputStyleType = 'outline',
  label = undefined,
  icon = undefined,
  textIconPosition = undefined,
  inputSize = SIZE_TYPE.MEDIUM,
  inputColor = undefined,
  onClickButton = undefined,
  buttonProps = {
    label: undefined,
    variant: undefined,
    icon: undefined,
    textIconPosition: undefined,
  },
  ...rest
}: InputProps) {
  return (
    <span
      className={classNames('input-wrap', [className])}
      data-variant={variant}
      data-style-type={inputStyleType}
      data-icon-position={textIconPosition}
      data-size={inputSize}
      data-color={inputColor}
    >
      {variant === 'withIcon' && textIconPosition === 'left' && icon}
      {variant !== 'inputOnly' && (
        <label htmlFor={id} className="input_label">
          {label}
        </label>
      )}
      <input name={id} className="input" {...rest} />
      {variant === 'withIcon' && textIconPosition === 'right' && icon}
      {variant === 'withButton' && (
        <Button
          {...buttonProps}
          variant="textOnly"
          buttonStyleType="contained"
          buttonSize={inputSize}
          buttonColor={inputColor}
          onClick={onClickButton}
        />
      )}
    </span>
  );
}

export default forwardRef(Input);
