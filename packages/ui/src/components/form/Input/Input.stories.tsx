import type { Meta, StoryObj } from '@storybook/react';
import { SIZE_TYPE } from '../../../types/constants';
import Input, { InputProps } from '.';

const meta: Meta<InputProps> = {
  title: '@ui/components/form/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<InputProps>;

const argTypes = {
  id: { control: false },
  className: { control: false },
  variant: {
    options: ['inputOnly', 'withLabel', 'withButton'],
    control: { type: 'radio' },
  },
  inputStyleType: {
    options: ['rounded', 'contained', 'underline'],
    control: { type: 'radio' },
  },
  label: {
    control: 'text',
  },
  inputSize: {
    options: [SIZE_TYPE.FULL, SIZE_TYPE.LARGE, SIZE_TYPE.MEDIUM, SIZE_TYPE.SMALL],
    control: { type: 'radio' },
  },
  inputColor: {
    options: ['primary', 'secondary', 'blue'],
    control: { type: 'radio' },
  },
  error: {
    control: 'text',
  },
  description: {
    control: 'text',
  },
  buttonProps: {
    label: {
      control: 'text',
    },
    variant: { options: ['textOnly', 'iconOnly', 'textIcon'], control: { type: 'radio' } },
    textIconPosition: { options: ['left', 'right'], control: { type: 'radio' } },
  },
};

export const InputStyle: Story = {
  args: {
    id: 'input--id-0',
    variant: 'inputOnly',
    inputStyleType: 'contained',
    label: 'label',
    inputSize: SIZE_TYPE.LARGE,
    inputColor: 'primary',
    error: 'error',
    description: '입력해주세요',
    onClickButton: () => {},
    buttonProps: {
      label: '버튼',
      variant: 'textOnly',
      textIconPosition: 'left',
    },
  },
  argTypes,
  render: (arg) => <Input {...arg} />,
};
