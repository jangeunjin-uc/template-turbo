import { Info } from '@phosphor-icons/react';
import classNames from 'classnames';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { SIZE_TYPE, SizeType } from '../../../types/constants';
import Button from '../../common/Button';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'csss'> {
  id: string;
  className?: string;
  variant: 'inputOnly' | 'withLabel' | 'withButton';
  inputStyleType?: 'rounded' | 'contained' | 'underline';
  label?: string;
  inputSize?: SizeType;
  inputColor?: 'primary' | 'secondary' | 'blue' | 'default';
  error?: string;
  description?: string;
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
  inputStyleType = 'contained',
  label = undefined,
  inputSize = SIZE_TYPE.MEDIUM,
  inputColor = 'default',
  onClickButton = undefined,
  error = undefined,
  description = undefined,
  buttonProps = {
    label: undefined,
    variant: undefined,
    icon: undefined,
    textIconPosition: undefined,
  },
  ...rest
}: InputProps) {
  return (
    <div
      className={classNames('input-container', { 'input--error': error }, className)}
      data-variant={variant}
      data-style-type={inputStyleType}
      data-size={inputSize}
      data-color={inputColor}
    >
      {variant !== 'inputOnly' && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <span className="input-wrap">
        <input name={id} className="input" {...rest} />
        {variant === 'withButton' && (
          <Button
            {...buttonProps}
            variant="textOnly"
            buttonStyleType="contained"
            buttonSize={inputSize === 'full' ? 'large' : inputSize}
            buttonColor={inputColor === 'default' ? 'primary' : inputColor}
            onClick={onClickButton}
          />
        )}
      </span>
      {error && <span className="error">{error}</span>}
      {!error && description && (
        <span className="description">
          <Info className="icon info" />
          {description}
        </span>
      )}
    </div>
  );
}

export default forwardRef(Input);
